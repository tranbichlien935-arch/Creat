import os
try:
    from PIL import Image
except ImportError:
    import sys
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def generate_favicon():
    logo_path = 'D:\\creatcraft\\Creat\\public\\logo.png'
    out_path = 'D:\\creatcraft\\Creat\\public\\favicon.png'
    
    img = Image.open(logo_path).convert('RGBA')
    
    # Make a square background based on max dimension
    size = max(img.size)
    pad = int(size * 0.15)
    full_size = size + pad * 2
    
    # Theme dark color
    bg = Image.new('RGBA', (full_size, full_size), '#1C1A14')
    
    # Calculate position to center the logo
    offset_x = (full_size - img.size[0]) // 2
    offset_y = (full_size - img.size[1]) // 2
    
    bg.paste(img, (offset_x, offset_y), img)
    favicon = bg.resize((128, 128), Image.Resampling.LANCZOS)
    favicon.save(out_path)
    print("Done generating favicon!")

generate_favicon()
