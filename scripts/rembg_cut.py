import os, io
from rembg import remove, new_session
from PIL import Image

SRC = "estructuraweb-modelo/fondoshero"
OUT = "public/hero/_cut"
os.makedirs(OUT, exist_ok=True)

mapping = {
    "sandiaenterafondo.jpeg": "sandia-entera",
    "trozosandiafondo.jpeg": "sandia-trozo",
    "sandíachuche.jpeg": "sandia-chuche",
    "pistachosfondo.jpeg": "pistacho-frutos",
    "bolapistachofondo.jpeg": "pistacho-bola",
    "tarrinapistacho.jpeg": "pistacho-tarrina",
    "patatacrudafondo.jpeg": "patata-cruda",
    "cebollacebollinofondo.jpeg": "patata-cebolla",
    "botepatatas.jpeg": "patata-bote",
    "limafondo.jpeg": "cola-lima",
    "cubitoshielofondo.jpeg": "cola-hielo",
    "latarefresco.jpeg": "cola-lata",
}

session = new_session("u2net")
for src, name in mapping.items():
    p = os.path.join(SRC, src)
    with open(p, "rb") as f:
        data = f.read()
    out = remove(
        data,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=10,
        alpha_matting_erode_size=8,
    )
    img = Image.open(io.BytesIO(out)).convert("RGBA")
    img = img.crop(img.getbbox())  # recorta al objeto
    img.save(os.path.join(OUT, name + ".png"))
    print("done", name, img.size)
print("ALL DONE")
