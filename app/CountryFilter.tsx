"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { CountryData, PathwayCategory } from "@/lib/types";
import { pathwayCategoryOrder } from "@/lib/types";

const FILTER_KEY = "pathpass-filter";

type FilterState = {
  pathway: PathwayCategory | "";
  region: string;
};

function readFilter(): FilterState {
  if (typeof window === "undefined") return { pathway: "", region: "" };
  try {
    const raw = sessionStorage.getItem(FILTER_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { pathway: "", region: "" };
}

export function CountryFilter({
  countries,
  regions,
}: {
  countries: CountryData[];
  regions: string[];
}) {
  const [filter, setFilterState] = useState<FilterState>({ pathway: "", region: "" });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFilterState(readFilter());
    setHydrated(true);
  }, []);

  const setFilter = useCallback((patch: Partial<FilterState>) => {
    setFilterState((prev) => {
      const next = { ...prev, ...patch };
      try { sessionStorage.setItem(FILTER_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const validPathway = filter.pathway && pathwayCategoryOrder.includes(filter.pathway as PathwayCategory)
    ? (filter.pathway as PathwayCategory) : null;
  const validRegion = filter.region && regions.includes(filter.region) ? filter.region : null;

  const filteredCountries = countries.filter((c) => {
    if (validPathway && !c.pathwayCategories.includes(validPathway)) return false;
    if (validRegion && c.region !== validRegion) return false;
    return true;
  });

  const clearAll = useCallback(() => {
    setFilter({ pathway: "", region: "" });
  }, [setFilter]);

  // Wire up pathway card clicks from the parent page
  useEffect(() => {
    const handler = (e: Event) => {
      const card = (e.currentTarget as HTMLElement).closest("[data-pathway]");
      if (!card) return;
      const pathway = card.getAttribute("data-pathway") as PathwayCategory;
      setFilter({ pathway: pathway === filter.pathway ? "" : pathway, region: "" });
      document.getElementById("countries")?.scrollIntoView({ behavior: "smooth" });
    };
    const cards = document.querySelectorAll(".pathway-card");
    cards.forEach((el) => el.addEventListener("click", handler));
    return () => cards.forEach((el) => el.removeEventListener("click", handler));
  }, [setFilter, filter.pathway]);

  // Highlight active pathway cards
  useEffect(() => {
    document.querySelectorAll(".pathway-card").forEach((el) => {
      const pathway = el.getAttribute("data-pathway");
      const isActive = validPathway === pathway;
      el.classList.toggle("bg-sky-700", isActive);
      el.classList.toggle("text-white", isActive);
      el.classList.toggle("bg-white", !isActive);
      el.classList.toggle("text-sky-950", !isActive);
    });
  }, [validPathway]);

  return (
    <>
      {/* Region filter */}
      <div className="mt-10 flex flex-wrap gap-2" id="countries-top">
        <button
          className={`rounded-full px-4 py-2 text-sm font-bold transition cursor-pointer ${
            !validRegion && !validPathway
              ? "bg-sky-700 text-white shadow-sm"
              : "bg-sky-100 text-sky-900 hover:bg-sky-200"
          }`}
          onClick={clearAll}
        >
          全部
        </button>
        {regions.map((region) => (
          <button
            className={`rounded-full px-4 py-2 text-sm font-bold transition cursor-pointer ${
              validRegion === region && !validPathway
                ? "bg-sky-700 text-white shadow-sm"
                : "bg-sky-100 text-sky-900 hover:bg-sky-200"
            }`}
            key={region}
            onClick={() =>
              setFilter({ region: validRegion === region ? "" : region, pathway: "" })
            }
          >
            {region}
          </button>
        ))}
      </div>

      {/* Country cards */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCountries.map((country) => (
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

      {hydrated && filteredCountries.length === 0 && (
        <div className="mt-8 rounded-[2rem] bg-white p-8 text-center shadow-sm ring-1 ring-sky-900/10">
          <p className="text-lg font-bold text-slate-700">没有匹配的国家 / 地区</p>
          <button
            className="mt-3 inline-flex rounded-full bg-sky-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-sky-500 cursor-pointer"
            onClick={clearAll}
          >
            清除筛选条件
          </button>
        </div>
      )}
    </>
  );
}