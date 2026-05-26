export function CountryFilter({
  regions,
  activeRegion,
  activePathway,
}: {
  regions: string[];
  activeRegion: string | null;
  activePathway: string | null;
}) {
  function href(region: string | null): string {
    const params = new URLSearchParams();
    if (region) params.set("region", region);
    if (activePathway) params.set("pathway", activePathway);
    const qs = params.toString();
    return qs ? `/?${qs}#countries` : "/#countries";
  }

  return (
    <div className="mt-10 flex flex-wrap gap-2">
      <a
        className={`rounded-full px-4 py-2 text-sm font-bold transition ${
          !activeRegion && !activePathway
            ? "bg-sky-700 text-white shadow-sm"
            : "bg-sky-100 text-sky-900 hover:bg-sky-200"
        }`}
        href="/#countries"
      >
        全部
      </a>
      {regions.map((region) => {
        const isActive = activeRegion === region && !activePathway;
        return (
          <a
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              isActive
                ? "bg-sky-700 text-white shadow-sm"
                : "bg-sky-100 text-sky-900 hover:bg-sky-200"
            }`}
            href={href(region)}
            key={region}
          >
            {region}
          </a>
        );
      })}
    </div>
  );
}