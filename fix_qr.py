import qrcode
from PIL import Image, ImageDraw

# Open flier
flier = Image.open('public/PremiumPizza_Flyer_Final.png').convert('RGBA')
bg_color = flier.getpixel((750, 900))
bg_color_rgb = bg_color[:3]

# Generate QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=1,
)
qr.add_data('https://nesto-lagano.vercel.app')
qr.make(fit=True)

# Create image with specific colors
qr_img = qr.make_image(fill_color="black", back_color=bg_color_rgb).convert('RGBA')

# Define erase box
erase_box = [755, 775, 1010, 1030] 

# Draw beige rectangle over the old one
draw = ImageDraw.Draw(flier)
draw.rectangle(erase_box, fill=bg_color)

# Resize QR code
qr_size = 230
qr_img = qr_img.resize((qr_size, qr_size), Image.Resampling.NEAREST)

# Paste position
paste_x = erase_box[0] + (erase_box[2] - erase_box[0] - qr_size) // 2
paste_y = erase_box[1] + (erase_box[3] - erase_box[1] - qr_size) // 2

flier.paste(qr_img, (paste_x, paste_y), qr_img)

# Save
flier.save('public/PremiumPizza_Flyer_Final_Fixed.png')
print("Fixed flier saved!")
