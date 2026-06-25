import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");
const srcDir = join(root, "public", "imgs");
const outDir = join(root, "public", "images");

mkdirSync(outDir, { recursive: true });

const files = readdirSync(srcDir)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  .sort();

console.log(`Convirtiendo ${files.length} imágenes...`);

for (let i = 0; i < files.length; i++) {
  const src = join(srcDir, files[i]);
  const out = join(outDir, `galeria-${i + 1}.webp`);
  await sharp(src)
    .rotate() // respeta EXIF
    .resize(720, 520, { fit: "cover", position: "attention" })
    .webp({ quality: 80 })
    .toFile(out);
  console.log(`  ✓ galeria-${i + 1}.webp  (${files[i]})`);
}

console.log(`\nListo → public/images/galeria-1..${files.length}.webp`);
