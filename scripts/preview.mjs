import sharp from "sharp";
import path from "node:path";
const HERO = path.resolve("public/hero");
const W = 900, H = 600;
const slides = [
  { name: "sandia", bg: { r: 0xd6, g: 0x27, b: 0x44 }, product: "sandia-chuche", ings: ["sandia-entera", "sandia-trozo"] },
  { name: "pistacho", bg: { r: 0x2f, g: 0x9c, b: 0x52 }, product: "pistacho-tarrina", ings: ["pistacho-frutos", "pistacho-bola"] },
  { name: "patata", bg: { r: 0xf6, g: 0xb8, b: 0x21 }, product: "patata-bote", ings: ["patata-cruda", "patata-cebolla"] },
  { name: "cola", bg: { r: 0x3a, g: 0x28, b: 0x20 }, product: "cola-lata", ings: ["cola-lima", "cola-hielo"] },
];
for (const s of slides) {
  const prod = await sharp(path.join(HERO, s.product + ".webp")).resize({ height: Math.round(H * 0.78) }).toBuffer();
  const pm = await sharp(prod).metadata();
  const ing0 = await sharp(path.join(HERO, s.ings[0] + ".webp")).resize({ width: 150 }).toBuffer();
  const ing1 = await sharp(path.join(HERO, s.ings[1] + ".webp")).resize({ width: 150 }).toBuffer();
  const i0 = await sharp(ing0).metadata();
  const i1 = await sharp(ing1).metadata();
  await sharp({ create: { width: W, height: H, channels: 4, background: s.bg } })
    .composite([
      { input: prod, left: Math.round(W / 2 - pm.width / 2 + 80), top: Math.round(H / 2 - pm.height / 2) },
      { input: ing0, left: W - i0.width - 20, top: 30 },
      { input: ing1, left: 10, top: H - i1.height - 20 },
    ])
    .png()
    .toFile(path.join(HERO, "_preview-" + s.name + ".png"));
  console.log("preview", s.name);
}
