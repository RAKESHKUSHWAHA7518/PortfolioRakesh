from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

root = Path(__file__).resolve().parent.parent
canvas = Image.new('RGB', (1200, 630), '#101311')
draw = ImageDraw.Draw(canvas)
font_path = 'C:/Windows/Fonts/segoeui.ttf'
bold_path = 'C:/Windows/Fonts/segoeuib.ttf'
draw.rounded_rectangle((750, 60, 1140, 570), 18, fill='#171b18', outline='#303830', width=2)
for radius in (75, 120, 166):
    draw.ellipse((945-radius, 300-radius, 945+radius, 300+radius), outline='#303830', width=2)
for i, height in enumerate((40, 75, 105, 60, 125, 85, 45)):
    x = 875 + i * 23
    draw.rounded_rectangle((x, 300-height/2, x+5, 300+height/2), 2, fill='#c6f27c')
draw.text((64, 68), 'RK.', font=ImageFont.truetype(bold_path, 40), fill='#c6f27c')
draw.text((64, 160), 'RAKESH KUSHWAHA', font=ImageFont.truetype(font_path, 22), fill='#a3aba1')
draw.text((60, 210), 'Gen AI &', font=ImageFont.truetype(bold_path, 67), fill='#eeefe8')
draw.text((60, 295), 'Full-Stack Developer', font=ImageFont.truetype(bold_path, 59), fill='#eeefe8')
draw.text((64, 418), 'End-to-end voice AI. Useful web products.', font=ImageFont.truetype(font_path, 26), fill='#c6f27c')
draw.line((64, 500, 685, 500), fill='#303830', width=2)
draw.text((64, 527), 'VOICE AI  /  GEN AI  /  FULL STACK', font=ImageFont.truetype(font_path, 18), fill='#a3aba1')
canvas.save(root / 'public' / 'og-image.png')
