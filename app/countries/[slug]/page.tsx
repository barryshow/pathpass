import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountryBySlug } from "@/lib/data";
import { groupProgramsByCategory } from "@/lib/types";
import { ProgramCard } from "@/app/components/ProgramCard";

export async function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return {
      title: "国家未找到｜PathPass 途照",
    };
  }

  return {
    title: `${country.country}身份路径｜PathPass 途照`,
    description: `${country.country}长期居留、永居、入籍、护照和签证路径概览——共${country.programs.length}个具体项目。`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const categoryGroups = groupProgramsByCategory(country.programs);

  return (
    <main className="min-h-screen bg-sky-50 text-slate-950">
      <section className="border-b border-sky-900/10 bg-[radial-gradient(circle_at_top_right,#bfdbfe,transparent_32%),linear-gradient(135deg,#eff6ff_0%,#dbeafe_48%,#f8fafc_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
          <Link className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-sky-800 shadow-sm ring-1 ring-sky-900/10" href="/">
            &larr; 返回国家概览
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-700">{country.region}</p>
              <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
                {country.country}
              </h1>
              <p className="mt-3 text-xl font-semibold text-sky-900">{country.englishName}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{country.overview}</p>
              <p className="mt-4 text-sm font-bold text-sky-700">共 {country.programs.length} 个具体项目</p>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-sky-950/10">
              <p className="text-sm font-bold text-sky-200">覆盖口径</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{country.developedScope}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:px-12">
        <aside className="space-y-5">
          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-sky-900/10">
            <h2 className="text-xl font-black">可探索路径</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {country.pathwayCategories.map((category) => {
                const count = country.programs.filter(p => p.category === category).length;
                return (
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-900" key={category}>
                    {category}({count})
                  </span>
                );
              })}
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-sky-900/10">
            <h2 className="text-xl font-black">适合重点关注的人群</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
              {country.bestFor.map((item) => (
                <li className="rounded-2xl bg-sky-50 p-4" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-sky-900/10">
            <h2 className="text-xl font-black">长期居留 / 永居概览</h2>
            <p className="mt-4 leading-7 text-slate-700">{country.residency}</p>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-sky-900/10">
            <h2 className="text-xl font-black">入籍 / 护照概览</h2>
            <p className="mt-4 leading-7 text-slate-700">{country.citizenship}</p>
          </section>

          <section className="rounded-[2rem] bg-blue-950 p-6 text-white shadow-sm">
            <h2 className="text-xl font-black">重要提醒</h2>
            <p className="mt-4 text-sm leading-7 text-blue-100">{country.caution}</p>
          </section>
        </aside>

        <div className="space-y-8">
          {categoryGroups.map(({ category, programs }) => (
            <section key={category}>
              <div className="mb-4">
                <h2 className="text-2xl font-black text-sky-950">{category}</h2>
                <p className="mt-1 text-sm font-semibold text-slate-500">{programs.length} 个项目</p>
              </div>
              <div className="grid gap-5">
                {programs.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-sky-900/10 sm:p-8">
            <h2 className="text-2xl font-black">数据来源与核验入口</h2>
            <p className="mt-3 leading-7 text-slate-600">
              首版列出来源名称，后续可逐项补充官方链接、更新时间、项目页面和中文解读。
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {country.sourceNames.map((source) => (
                <li className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm font-semibold text-sky-950" key={source}>
                  {source}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}