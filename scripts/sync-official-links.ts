/**
 * Sync officialLink from TypeScript data files to Supabase `programs` table.
 *
 * Usage: npx tsx scripts/sync-official-links.ts
 */
import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

// Load .env.local manually
const envPath = path.resolve(".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eqIdx = trimmed.indexOf("=");
  if (eqIdx === -1) continue;
  process.env[trimmed.slice(0, eqIdx)] = trimmed.slice(eqIdx + 1);
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DATA_DIR = path.resolve("lib/data");

interface Program {
  id: string;
  country_slug: string;
  official_link: string | null;
}

async function main() {
  // 1. Read all TS data files, extract id + officialLink
  const localPrograms: { id: string; officialLink: string | null }[] = [];

  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".ts") && f !== "helpers.ts" && f !== "index.ts");
  for (const file of files) {
    const content = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
    const ids = [...content.matchAll(/id:\s*"([^"]+)"/g)];
    for (let i = 0; i < ids.length; i++) {
      const start = ids[i].index;
      const end = i + 1 < ids.length ? ids[i + 1].index : content.length;
      const block = content.slice(start, end);
      const linkMatch = block.match(/officialLink:\s*"(https?:\/\/[^"]+)"/);
      localPrograms.push({
        id: ids[i][1],
        officialLink: linkMatch ? linkMatch[1] : null,
      });
    }
  }

  console.log(`Read ${localPrograms.length} programs from local data files`);

  // 2. Fetch all programs from Supabase
  const { data: remotePrograms, error: fetchError } = await supabase
    .from("programs")
    .select("id, country_slug, official_link");

  if (fetchError) {
    console.error("Failed to fetch programs from Supabase:", fetchError.message);
    process.exit(1);
  }

  const remoteMap = new Map<string, Program>((remotePrograms ?? []).map((p: Program) => [p.id, p]));
  console.log(`Fetched ${remotePrograms?.length ?? 0} programs from Supabase`);

  // 3. Find programs that need updating
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const local of localPrograms) {
    const remote = remoteMap.get(local.id);
    if (!remote) {
      console.log(`  [SKIP] Program "${local.id}" not found in Supabase`);
      skipped++;
      continue;
    }

    if (remote.official_link === local.officialLink) {
      skipped++;
      continue;
    }

    const { error: updateError } = await supabase
      .from("programs")
      .update({ official_link: local.officialLink })
      .eq("id", local.id);

    if (updateError) {
      console.log(`  [ERR]  "${local.id}": ${updateError.message}`);
      errors++;
    } else {
      console.log(`  [OK]   "${local.id}": ${remote.official_link ?? "(none)"} → ${local.officialLink ?? "(none)"}`);
      updated++;
    }
  }

  console.log(`\nDone: ${updated} updated, ${skipped} skipped, ${errors} errors`);
}

main().catch(console.error);