import type { APIRoute } from "astro";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const LEADS_FILE = join(process.cwd(), "data", "leads.json");

export const POST: APIRoute = async ({ request }) => {
  try {
    const lead = await request.json();

    if (!lead.name?.trim() || !lead.phone?.trim()) {
      return new Response(JSON.stringify({ ok: false, error: "Nombre y teléfono requeridos" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const dir = join(process.cwd(), "data");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    const leads: unknown[] = existsSync(LEADS_FILE)
      ? JSON.parse(readFileSync(LEADS_FILE, "utf-8"))
      : [];

    leads.push({ ...lead, createdAt: new Date().toISOString() });
    writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
