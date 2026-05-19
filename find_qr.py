from PIL import Image

img = Image.open('public/PremiumPizza_Flyer_Final.png')
pixels = img.load()

x_min, x_max = 730, 1010
y_min, y_max = 700, 1150

col_counts = [0] * (x_max - x_min)
row_counts = [0] * (y_max - y_min)

for x in range(x_min, x_max):
    for y in range(y_min, y_max):
        r, g, b = pixels[x, y][:3]
        if r < 50 and g < 50 and b < 50:
            col_counts[x - x_min] += 1
            row_counts[y - y_min] += 1

print("Columns with > 10 black pixels:")
for i, c in enumerate(col_counts):
    if c > 10: print(f"X={x_min+i}", end=' ')
print("\nRows with > 10 black pixels:")
for i, r in enumerate(row_counts):
    if r > 10: print(f"Y={y_min+i}", end=' ')
print()
