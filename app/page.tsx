import Link from "next/link";
import { countries, pathwayTypes, regions } from "@/lib/data";

const stats = [
  { label: "发达经济体 / 地区", value: `${countries.length}` },
  { label: "具体可申请项目", value: `${countries.reduce((sum, c) => sum + c.programs.length, 0)}` },
  { label: "区域覆盖", value: `${regions.length}` },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-sky-50 text-slate-950">
      <section className="relative border-b border-sky-900/10 bg-[radial-gradient(circle_at_top_left,#93c5fd,transparent_32%),linear-gradient(135deg,#eff6ff_0%,#dbeafe_48%,#f8fafc_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-8 sm:px-10 lg:px-12 lg:py-12">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700">PathPass</p>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-950">途照</h1>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <a className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-sky-900/10" href="#countries">
                国家概览
              </a>
              <a className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-sky-900/10" href="#pathways">
                路径类型
              </a>
              <a className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-sky-900/10" href="#sources">
                数据来源
              </a>
            </nav>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex rounded-full bg-sky-700 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-sky-700/20">
                全球发达国家身份路径信息工具
              </p>
              <h2 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                从国家到路径，快速理解长期居留、永居、入籍和护照选择。
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                PathPass｜途照面向中文用户整理发达国家与高收入地区的真实身份项目，帮助你先做方向判断，再进入官方核验和专业咨询。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="rounded-full bg-sky-600 px-6 py-3 text-center font-bold text-white shadow-lg shadow-sky-800/20 transition hover:bg-sky-500" href="#countries">
                  查看全部国家
                </a>
                <a className="rounded-full bg-white px-6 py-3 text-center font-bold text-sky-900 shadow-sm ring-1 ring-sky-900/10 transition hover:bg-sky-50" href="#sources">
                  查看数据来源
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/85 p-5 shadow-2xl shadow-sky-950/10 ring-1 ring-sky-900/10 backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <p className="text-sm font-semibold text-sky-200">首版覆盖口径</p>
                <p className="mt-4 leading-7 text-slate-200">
                  以 IMF advanced economies、联合国区域口径和各国官方移民 / 签证部门为基础，先建立可浏览、可扩展、可核验的信息架构。
                </p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-sky-900/10" key={stat.label}>
                    <p className="text-2xl font-black text-sky-700">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12" id="pathways">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-sky-700">Pathway taxonomy</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">路径分类</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            每个国家详情页都会标记适用路径，并提供正式申请前需要核验的要求清单。
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pathwayTypes.map((pathway) => {
            const count = countries.reduce((sum, c) => sum + c.programs.filter(p => p.category === pathway).length, 0);
            return (
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-sky-900/10" key={pathway}>
                <p className="font-bold text-sky-950">{pathway}</p>
                <p className="mt-1 text-sm text-slate-500">{count} 个具体项目</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white/60 py-16" id="countries">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-sky-700">Country explorer</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">发达国家与高收入地区概览</h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                点击卡片进入详情页，查看该国家 / 地区的路径概览、具体项目、要求核验和数据来源。
              </p>
            </div>
            <div className="rounded-3xl bg-blue-950 p-5 text-sm leading-6 text-blue-100 lg:max-w-sm">
              本工具用于信息整理和路径初筛，不构成移民、法律、税务或投资建议。正式申请前应核验官方文件并咨询持牌专业人士。
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {regions.map((region) => (
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-900" key={region}>
                {region}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {countries.map((country) => (
              <Link
                className="group rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-sky-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/10"
                href={`/countries/${country.slug}`}
                key={country.slug}
              >
                <article>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-sky-700">{country.region}</p>
                      <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-950">{country.country}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-500">{country.englishName}</p>
                    </div>
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-black text-sky-800 ring-1 ring-sky-100">
                      {country.programs.length} 项
                    </span>
                  </div>
                  <p className="mt-4 line-clamp-3 min-h-[5.25rem] leading-7 text-slate-700">{country.overview}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {country.pathwayCategories.slice(0, 4).map((category) => {
                      const count = country.programs.filter(p => p.category === category).length;
                      return (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700" key={category}>
                          {category}({count})
                        </span>
                      );
                    })}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-sky-900/10 pt-4 text-sm font-black text-sky-700">
                    <span>查看具体项目</span>
                    <span className="transition group-hover:translate-x-1">&rarr;</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12" id="sources">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-sky-700">Sources</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">数据来源与上线路线</h2>
            <p className="mt-4 leading-7 text-slate-700">
              首版先以来源名称和核验清单建立可信结构；下一步可以补充官方链接、更新时间、项目级字段，并接入 Supabase 作为内容后台。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "各国移民 / 内政 / 司法主管部门",
              "各国外交部、签证与领事服务页面",
              "OECD International Migration Outlook",
              "IMF advanced economies classification",
              "UN M49 regional classification",
              "Vercel + GitHub 部署，Supabase 后续作为数据源",
            ].map((source) => (
              <div className="rounded-3xl bg-white p-5 text-sm font-bold leading-6 text-sky-950 shadow-sm ring-1 ring-sky-900/10" key={source}>
                {source}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}