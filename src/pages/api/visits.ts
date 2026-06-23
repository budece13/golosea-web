import type { APIRoute } from "astro";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

// Registro simple de visitas por mes -> data/visits.json  { "YYYY-MM": n }
// (cuenta cargas de página; al editar podemos afinar a visitantes únicos)
const VISITS_FILE = join(process.cwd(), "data", "visits.json");

export const GET: APIRoute = () => {
  try {
    const month = new Date().toISOString().slice(0, 7); // "YYYY-MM"
    const dir = join(process.cwd(), "data");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    const data: Record<string, number> = existsSync(VISITS_FILE)
      ? JSON.parse(readFileSync(VISITS_FILE, "utf-8"))
      : {};

    data[month] = (data[month] || 0) + 1;
    writeFileSync(VISITS_FILE, JSON.stringify(data, null, 2), "utf-8");

    return new Response(JSON.stringify({ month, count: data[month] }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ count: 0 }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
