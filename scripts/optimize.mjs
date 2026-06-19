import sharp from "sharp";
import path from "node:path";
import { readdirSync, unlinkSync, renameSync } from "node:fs";
const HERO = path.resolve("public/hero");

// optimiza los jpg de ingredientes (los productos ya son png recortados)
const ingredients = [
  "sandia-entera", "sandia-trozo", "pistacho-frutos", "pistacho-bola",
  "patata-cruda", "patata-cebolla", "cola-lima", "cola-hielo",
];
for (const name of ingredients) {
  const p = path.join(HERO, name + ".jpg");
  const tmp = path.join(HERO, name + ".tmp.jpg");
  await sharp(p).resize({ width: 760, withoutEnlargement: true }).jpeg({ quality: 80 }).toFile(tmp);
  unlinkSync(p);
  renameSync(tmp, p);
}

// borra los _check-*.png de prueba
for (const f of readdirSync(HERO)) {
  if (f.startsWith("_check-")) unlinkSync(path.join(HERO, f));
}
console.log("optimized + cleaned");
