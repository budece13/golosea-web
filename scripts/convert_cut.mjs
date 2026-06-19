import sharp from "sharp";
import path from "node:path";
import { readdirSync, rmSync, unlinkSync, existsSync } from "node:fs";

const HERO = path.resolve("public/hero");
const CUT = path.join(HERO, "_cut");
const products = new Set(["sandia-chuche", "pistacho-tarrina", "patata-bote", "cola-lata"]);
const ALPHA_FLOOR = 70; // limpia el halo tenue de fondo

for (const file of readdirSync(CUT)) {
  if (!file.endsWith(".png")) continue;
  const name = file.replace(/\.png$/, "");
  const { data, info } = await sharp(path.join(CUT, file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  // recorta el alfa bajo para quitar el halo
  for (let i = 3; i < data.length; i += info.channels) {
    if (data[i] < ALPHA_FLOOR) data[i] = 0;
  }
  const width = products.has(name) ? 760 : 470;
  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .trim()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 100 })
    .toFile(path.join(HERO, name + ".webp"));
  // borra el jpg de ingrediente antiguo si existe
  const oldJpg = path.join(HERO, name + ".jpg");
  if (existsSync(oldJpg)) unlinkSync(oldJpg);
  console.log("->", name + ".webp", width + "w");
}
rmSync(CUT, { recursive: true, force: true });
console.log("done");
