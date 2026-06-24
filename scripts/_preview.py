from PIL import Image
f = Image.open("public/secciones/chuches-marco.png")
b = Image.new("RGB", f.size, (255, 250, 247))
b.paste(f, (0, 0), f)
b.save("scripts/_preview.png")
print("ok")
