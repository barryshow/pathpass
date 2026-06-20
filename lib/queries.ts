/**
 * Local data queries — mirrors the Supabase query interface from supabase-queries.ts
 * but reads from the TypeScript data files at lib/data/*.ts.
 *
 * This makes the entire site statically renderable with zero database dependency.
 * Supabase is preserved as an optional CMS backend (see scripts/sync-official-links.ts).
 */
import type { CountryData } from "./types";
import { countries } from "./data";

export async function fetchCountries(): Promise<CountryData[]> {
  return countries;
}

export async function fetchCountryBySlug(slug: string): Promise<CountryData | null> {
  return countries.find((c) => c.slug === slug) ?? null;
}

export async function fetchRegions(): Promise<string[]> {
  return Array.from(new Set(countries.map((c) => c.region)));
}

export async function fetchAllSlugs(): Promise<string[]> {
  return countries.map((c) => c.slug);
}