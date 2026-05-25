import { ImmigrationProgram, ProgramStatus, MinRequirement } from "@/lib/types";

function StatusBadge({ status }: { status: ProgramStatus }) {
  const config: Record<ProgramStatus, { bg: string; text: string; label: string }> = {
    open: { bg: "bg-green-100", text: "text-green-800", label: "开放申请" },
    pending_changes: { bg: "bg-amber-100", text: "text-amber-800", label: "政策变动中" },
    closed: { bg: "bg-red-100", text: "text-red-800", label: "暂停 / 关闭" },
  };
  const { bg, text, label } = config[status];
  return (
    <span className={`rounded-full ${bg} px-3 py-1 text-xs font-bold ${text}`}>
      {label}
    </span>
  );
}

function RequirementBadge({ requirement }: { requirement: MinRequirement }) {
  return (
    <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm">
      <span className="font-bold text-sky-700">{requirement.dimension}</span>
      <span className="ml-1 text-slate-700">{requirement.value}</span>
      {requirement.note && (
        <span className="ml-1 text-xs text-slate-500">({requirement.note})</span>
      )}
    </div>
  );
}

export function ProgramCard({ program }: { program: ImmigrationProgram }) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-sky-900/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-slate-950">{program.name}</h3>
          {program.englishName && (
            <p className="text-sm font-semibold text-slate-500">{program.englishName}</p>
          )}
        </div>
        <StatusBadge status={program.status} />
      </div>
      <p className="mt-3 leading-7 text-slate-700">{program.summary}</p>

      {program.minRequirements.length > 0 && (
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {program.minRequirements.map((req) => (
            <RequirementBadge key={`${program.id}-${req.dimension}-${req.value}`} requirement={req} />
          ))}
        </div>
      )}

      {program.targetAudience.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {program.targetAudience.map((tag) => (
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {program.processingTime && (
        <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm">
          <span className="font-bold text-slate-700">处理时间：</span>
          <span className="text-slate-600">{program.processingTime}</span>
        </div>
      )}

      {program.keyNotes.length > 0 && (
        <ul className="mt-4 grid gap-2 text-sm text-slate-700">
          {program.keyNotes.map((note) => (
            <li className="flex gap-2" key={note}>
              <span className="text-sky-600">&#9679;</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      )}

      {program.officialLink && (
        <a
          className="mt-4 inline-flex rounded-full bg-sky-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-sky-500"
          href={program.officialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          官方页面 &#8599;
        </a>
      )}
    </div>
  );
}