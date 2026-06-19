import sharp from "sharp";
import path from "node:path";
import { unlinkSync } from "node:fs";
const HERO = path.resolve("public/hero");
const products = ["sandia-chuche", "pistacho-tarrina", "patata-bote", "cola-lata"];
for (const name of products) {
  await sharp(path.join(HERO, name + ".png"))
    .resize({ width: 760, withoutEnlargement: true })
    .webp({ quality: 86, alphaQuality: 100 })
    .toFile(path.join(HERO, name + ".webp"));
  unlinkSync(path.join(HERO, name + ".png")); // png intermedio
  unlinkSync(path.join(HERO, name + ".jpg")); // jpg original con cuadriculado
}
console.log("finalized to webp");
