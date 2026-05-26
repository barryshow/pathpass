import { supabase } from "./supabase";
import type { CountryData, ImmigrationProgram, PathwayCategory } from "./types";
import { pathwayCategoryOrder } from "./types";

type CountryRow = {
  slug: string;
  country: string;
  english_name: string;
  region: string;
  overview: string;
  developed_scope: string;
  best_for: string[];
  residency: string;
  citizenship: string;
  caution: string;
  source_names: string[];
};

type ProgramRow = {
  id: string;
  country_slug: string;
  name: string;
  english_name: string | null;
  summary: string;
  category: string;
  min_requirements: unknown;
  target_audience: string[];
  official_link: string | null;
  processing_time: string | null;
  key_notes: string[];
  status: string;
  last_verified: string;
};

function rowToProgram(row: ProgramRow): ImmigrationProgram {
  return {
    id: row.id,
    name: row.name,
    englishName: row.english_name ?? undefined,
    summary: row.summary,
    category: row.category as PathwayCategory,
    minRequirements: (row.min_requirements ?? []) as ImmigrationProgram["minRequirements"],
    targetAudience: row.target_audience ?? [],
    officialLink: row.official_link ?? undefined,
    processingTime: row.processing_time ?? undefined,
    keyNotes: row.key_notes ?? [],
    status: row.status as ImmigrationProgram["status"],
    lastVerified: row.last_verified,
  };
}

function rowToCountry(row: CountryRow, programs: ImmigrationProgram[]): CountryData {
  const categories = Array.from(new Set(programs.map((p) => p.category)));
  return {
    slug: row.slug,
    country: row.country,
    englishName: row.english_name,
    region: row.region,
    overview: row.overview,
    developedScope: row.developed_scope,
    pathwayCategories: categories,
    programs,
    bestFor: row.best_for ?? [],
    residency: row.residency,
    citizenship: row.citizenship,
    caution: row.caution,
    sourceNames: row.source_names ?? [],
  };
}

export async function fetchCountries(): Promise<CountryData[]> {
  const { data: countryRows, error: countryError } = await supabase
    .from("countries")
    .select("*")
    .order("slug");

  if (countryError) throw new Error(`Failed to fetch countries: ${countryError.message}`);
  if (!countryRows) return [];

  const { data: programRows, error: programError } = await supabase
    .from("programs")
    .select("*");

  if (programError) throw new Error(`Failed to fetch programs: ${programError.message}`);

  const programsByCountry = new Map<string, ProgramRow[]>();
  for (const p of programRows ?? []) {
    const list = programsByCountry.get(p.country_slug) ?? [];
    list.push(p as ProgramRow);
    programsByCountry.set(p.country_slug, list);
  }

  return (countryRows as CountryRow[]).map((row) => {
    const programs = (programsByCountry.get(row.slug) ?? []).map(rowToProgram);
    return rowToCountry(row, programs);
  });
}

export async function fetchCountryBySlug(slug: string): Promise<CountryData | null> {
  const { data: countryRows, error: countryError } = await supabase
    .from("countries")
    .select("*")
    .eq("slug", slug)
    .limit(1);

  if (countryError) throw new Error(`Failed to fetch country: ${countryError.message}`);
  if (!countryRows || countryRows.length === 0) return null;

  const row = countryRows[0] as CountryRow;

  const { data: programRows, error: programError } = await supabase
    .from("programs")
    .select("*")
    .eq("country_slug", slug);

  if (programError) throw new Error(`Failed to fetch programs: ${programError.message}`);

  const programs = (programRows ?? []).map((p) => rowToProgram(p as ProgramRow));
  return rowToCountry(row, programs);
}

export async function fetchRegions(): Promise<string[]> {
  const { data, error } = await supabase
    .from("countries")
    .select("region")
    .order("region");

  if (error) throw new Error(`Failed to fetch regions: ${error.message}`);
  return Array.from(new Set((data ?? []).map((r: { region: string }) => r.region)));
}

export const pathwayTypes: PathwayCategory[] = pathwayCategoryOrder;

export async function fetchAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("countries")
    .select("slug");

  if (error) throw new Error(`Failed to fetch slugs: ${error.message}`);
  return (data ?? []).map((r: { slug: string }) => r.slug);
}