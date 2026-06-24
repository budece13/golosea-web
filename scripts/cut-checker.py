import sys
import numpy as np
from PIL import Image, ImageFilter

src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
arr = np.asarray(im).astype(np.int16)
R, G, B = arr[..., 0], arr[..., 1], arr[..., 2]
val = arr.mean(axis=2)
sat = np.maximum(np.maximum(R, G), B) - np.minimum(np.minimum(R, G), B)

achromatic = sat < 16

# 1) semilla: cuadritos GRISES del damero (acromaticos, val ~170) -> nunca son chuche
gray_seed = achromatic & (val >= 150) & (val <= 200)

# 2) dilatar la semilla ~28px para abarcar los cuadritos blancos contiguos del damero
def dilate(mask, radius):
    img = Image.fromarray((mask * 255).astype(np.uint8))
    # MaxFilter en pasos (kernel impar) hasta cubrir el radio
    step = 9
    n = max(1, round((radius * 2 + 1) / step))
    for _ in range(n):
        img = img.filter(ImageFilter.MaxFilter(step))
    return np.asarray(img) > 127

region = dilate(gray_seed, 28)

# 3) dentro de la region del damero, quitar TODO lo acromatico y claro (val>=150):
#    cubre grises, blancos y los bordes anti-alias del damero.
#    El regaliz negro (val<150) y lo de color (sat alto) se conservan.
checker = region & achromatic & (val >= 150)

alpha = np.where(checker, 0, 255).astype(np.uint8)

# 4) suavizar el borde del alpha (anti-jaggies) y comer 1px de halo gris
a = Image.fromarray(alpha)
a = a.filter(ImageFilter.MinFilter(3))   # erosiona 1px lo opaco -> mata halo claro
a = a.filter(ImageFilter.GaussianBlur(0.8))
alpha = np.asarray(a)

rgba = np.dstack([arr.astype(np.uint8), alpha])
Image.fromarray(rgba, "RGBA").save(out)

kept = (alpha > 10).mean() * 100
print(f"opaco: {kept:.1f}%  -> {out}  {im.size}")
