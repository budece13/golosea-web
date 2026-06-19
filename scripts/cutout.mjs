// Recorta el cuadriculado de transparencia (baked) de los 4 productos.
// Estrategia: flood-fill desde TODOS los pixeles del borde, marcando como
// transparente cualquier pixel "gris claro" (baja saturacion + luminoso) que
// este conectado al borde. Asi se elimina solo el tablero de ajedrez del fondo
// y se conservan los blancos interiores (azucar de la gominola, borde de tarrina).
import sharp from "sharp";
import path from "node:path";

const HERO = path.resolve("public/hero");
const products = ["sandia-chuche", "pistacho-tarrina", "patata-bote", "cola-lata"];

const SAT_TOL = 38;   // max-min <= esto  => gris
const MIN_LUM = 135;  // min canal >= esto => claro (descarta grises oscuros del producto)
const MAX_W = 1000;   // ancho maximo de salida

for (const name of products) {
  const inPath = path.join(HERO, name + ".jpg");
  const { data, info } = await sharp(inPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: W, height: H, channels: C } = info;
  const idx = (x, y) => (y * W + x) * C;

  // muestreo de esquinas
  const sample = (x, y) => {
    const i = idx(x, y);
    return [data[i], data[i + 1], data[i + 2]];
  };
  console.log(`\n${name}  ${W}x${H}`);
  for (const [cx, cy, lbl] of [[2, 2, "TL"], [W - 3, 2, "TR"], [2, H - 3, "BL"], [W - 3, H - 3, "BR"], [(W / 2) | 0, 2, "Tmid"]]) {
    console.log(`  ${lbl}: ${sample(cx, cy).join(",")}`);
  }

  const isBg = (i) => {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return (max - min) <= SAT_TOL && min >= MIN_LUM;
  };

  // BFS flood-fill desde el borde
  const visited = new Uint8Array(W * H);
  const stack = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const p = y * W + x;
    if (visited[p]) return;
    visited[p] = 1;
    if (isBg(idx(x, y))) stack.push(x, y);
  };
  for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
  for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }

  let removed = 0;
  while (stack.length) {
    const y = stack.pop(), x = stack.pop();
    data[idx(x, y) + 3] = 0; // alpha 0
    removed++;
    push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
  }
  console.log(`  removed ${removed} px (${((removed / (W * H)) * 100).toFixed(1)}%)`);

  // recorta el bounding box visible + redimensiona + exporta PNG
  await sharp(Buffer.from(data), { raw: { width: W, height: H, channels: C } })
    .png()
    .trim()
    .resize({ width: MAX_W, withoutEnlargement: true })
    .toFile(path.join(HERO, name + ".png"));
  console.log(`  -> ${name}.png`);
}
