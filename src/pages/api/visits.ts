import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

// Contador de visitas por mes (clave por "YYYY-MM", se reinicia solo cada mes).
// - En producción (Vercel): usa Upstash Redis (KV). El sistema de archivos de
//   las funciones serverless es de solo lectura y efímero, así que NO sirve un
//   .json. Redis.INCR es atómico -> cuenta exacta sin condiciones de carrera.
// - En local: si no hay Redis configurado, cae a data/visits.json para poder
//   probar sin montar nada.
const url = import.meta.env.KV_REST_API_URL ?? import.meta.env.UPSTASH_REDIS_REST_URL;
const token = import.meta.env.KV_REST_API_TOKEN ?? import.meta.env.UPSTASH_REDIS_REST_TOKEN;
const redis = url && token ? new Redis({ url, token }) : null;

const VISITS_FILE = join(process.cwd(), "data", "visits.json");

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const GET: APIRoute = async () => {
  const month = new Date().toISOString().slice(0, 7); // "YYYY-MM"
  try {
    // Producción: contador atómico en Redis
    if (redis) {
      const count = await redis.incr(`visits:${month}`);
      return json({ month, count });
    }

    // Local (sin Redis): respaldo en archivo
    const dir = join(process.cwd(), "data");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const data: Record<string, number> = existsSync(VISITS_FILE)
      ? JSON.parse(readFileSync(VISITS_FILE, "utf-8"))
      : {};
    data[month] = (data[month] || 0) + 1;
    writeFileSync(VISITS_FILE, JSON.stringify(data, null, 2), "utf-8");
    return json({ month, count: data[month] });
  } catch {
    return json({ count: 0 }, 500);
  }
};
