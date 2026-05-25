// ========== Pathway Categories ==========

export type PathwayCategory =
  | "留学转永居"
  | "技术移民"
  | "雇主担保"
  | "高技能人才签证"
  | "创业 / 投资路径"
  | "数字游民签证"
  | "长期居留转永居"
  | "入籍路径";

export const pathwayCategoryOrder: PathwayCategory[] = [
  "留学转永居",
  "技术移民",
  "雇主担保",
  "高技能人才签证",
  "创业 / 投资路径",
  "数字游民签证",
  "长期居留转永居",
  "入籍路径",
];

// ========== Program Status ==========

export type ProgramStatus = "open" | "pending_changes" | "closed";

// ========== Structured Minimum Requirements ==========

export type RequirementDimension =
  | "金额"
  | "年限"
  | "语言等级"
  | "学历"
  | "年龄"
  | "职业类别"
  | "收入"
  | "其他";

export type MinRequirement = {
  dimension: RequirementDimension;
  value: string;
  note?: string;
};

// ========== Immigration Program ==========

export type ImmigrationProgram = {
  id: string;
  name: string;
  englishName?: string;
  summary: string;
  category: PathwayCategory;
  minRequirements: MinRequirement[];
  targetAudience: string[];
  officialLink?: string;
  processingTime?: string;
  keyNotes: string[];
  status: ProgramStatus;
  lastVerified: string;
};

// ========== Country Data ==========

export type CountryData = {
  slug: string;
  country: string;
  englishName: string;
  region: string;
  overview: string;
  developedScope: string;
  pathwayCategories: PathwayCategory[];
  programs: ImmigrationProgram[];
  bestFor: string[];
  residency: string;
  citizenship: string;
  caution: string;
  sourceNames: string[];
};

// ========== Legacy Profile (for backward compatibility) ==========

export type CountryProfile = {
  slug: string;
  country: string;
  englishName: string;
  region: string;
  overview: string;
  developedScope: string;
  pathways: PathwayCategory[];
  requirements: string[];
  residency: string;
  citizenship: string;
  bestFor: string[];
  caution: string;
  sourceNames: string[];
};

// ========== Derived Types ==========

export type CategoryWithPrograms = {
  category: PathwayCategory;
  programs: ImmigrationProgram[];
};

export function groupProgramsByCategory(
  programs: ImmigrationProgram[],
): CategoryWithPrograms[] {
  const groups = new Map<PathwayCategory, ImmigrationProgram[]>();
  for (const program of programs) {
    const existing = groups.get(program.category) ?? [];
    existing.push(program);
    groups.set(program.category, existing);
  }
  return Array.from(groups.entries())
    .map(([category, programs]) => ({ category, programs }))
    .sort(
      (a, b) =>
        pathwayCategoryOrder.indexOf(a.category) -
        pathwayCategoryOrder.indexOf(b.category),
    );
}

// ========== Adapter ==========

export function countryDataToLegacyProfile(data: CountryData): CountryProfile {
  return {
    slug: data.slug,
    country: data.country,
    englishName: data.englishName,
    region: data.region,
    overview: data.overview,
    developedScope: data.developedScope,
    pathways: data.pathwayCategories,
    requirements: [],
    residency: data.residency,
    citizenship: data.citizenship,
    bestFor: data.bestFor,
    caution: data.caution,
    sourceNames: data.sourceNames,
  };
}