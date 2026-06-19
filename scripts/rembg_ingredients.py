import os, io
from rembg import remove, new_session
from PIL import Image

SRC = "estructuraweb-modelo/fondoshero"
OUT = "public/hero"

# nuevas imagenes transparentes (nobg) -> nombre de ingrediente
mapping = {
    "sandiafondonobg.jpeg": "sandia-entera",
    "trozosandianobg.jpeg": "sandia-trozo",
    "pistachosnobg.jpeg": "pistacho-frutos",
    "heladopistachonobg.jpeg": "pistacho-bola",
    "patatanobg.jpeg": "patata-cruda",
    "cebollacebollinonobg.jpeg": "patata-cebolla",
    "limanobg.jpeg": "cola-lima",
    "hielonobg.jpeg": "cola-hielo",
}

session = new_session("u2net")
for src, name in mapping.items():
    with open(os.path.join(SRC, src), "rb") as f:
        data = f.read()
    out = remove(
        data, session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=10,
        alpha_matting_erode_size=8,
    )
    img = Image.open(io.BytesIO(out)).convert("RGBA")
    r, g, b, a = img.split()
    a = a.point(lambda v: 0 if v < 70 else v)  # limpia halo tenue
    img = Image.merge("RGBA", (r, g, b, a))
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    w, h = img.size
    if w > 470:
        img = img.resize((470, round(h * 470 / w)), Image.LANCZOS)
    img.save(os.path.join(OUT, name + ".webp"), "WEBP", quality=88, method=6)
    print("ok", name, img.size)
print("DONE")
