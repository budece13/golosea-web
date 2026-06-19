import sharp from "sharp";
import path from "node:path";
const HERO = path.resolve("public/hero");
const tests = [
  ["sandia-chuche", { r: 200, g: 30, b: 45 }],
  ["pistacho-tarrina", { r: 40, g: 140, b: 70 }],
  ["patata-bote", { r: 235, g: 190, b: 40 }],
  ["cola-lata", { r: 45, g: 35, b: 30 }],
];
for (const [name, bg] of tests) {
  const fg = await sharp(path.join(HERO, name + ".png")).resize({ width: 500 }).toBuffer();
  const meta = await sharp(fg).metadata();
  await sharp({ create: { width: meta.width, height: meta.height, channels: 4, background: bg } })
    .composite([{ input: fg }])
    .png()
    .toFile(path.join(HERO, "_check-" + name + ".png"));
}
console.log("done");
