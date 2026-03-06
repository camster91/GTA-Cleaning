import os
from PIL import Image
import sys

# Paths
logo_path = "public/images/gta_logo.png"
favicon_path = "public/favicon.svg"
favicon_ico_path = "public/favicon.ico"
favicon_png_path = "public/favicon.png"

# Create optimized logo versions
def optimize_logo():
    print("Processing logo...")
    
    # Open the logo
    try:
        img = Image.open(logo_path)
        width, height = img.size
        print(f"Original logo dimensions: {width}x{height}")
        print(f"Original logo mode: {img.mode}")
        
        # Create various sizes
        sizes = {
            "logo_32x32.png": (32, 32),
            "logo_64x64.png": (64, 64),
            "logo_128x128.png": (128, 128),
            "logo_256x256.png": (256, 256),
        }
        
        for filename, size in sizes.items():
            resized = img.resize(size, Image.Resampling.LANCZOS)
            output_path = f"public/images/{filename}"
            resized.save(output_path, optimize=True, quality=90)
            print(f"Created: {output_path}")
            
        return img
    except Exception as e:
        print(f"Error processing logo: {e}")
        return None

# Create favicon from logo
def create_favicon(img):
    print("\nCreating favicon...")
    
    # Create favicon.ico with multiple sizes
    favicon_sizes = [16, 32, 48, 64]
    favicon_images = []
    
    for size in favicon_sizes:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        favicon_images.append(resized)
    
    # Save as .ico
    if len(favicon_images) > 0:
        favicon_images[0].save(favicon_ico_path, format='ICO', sizes=[(s, s) for s in favicon_sizes])
        print(f"Created: {favicon_ico_path}")
    
    # Create PNG favicon (32x32)
    png_favicon = img.resize((32, 32), Image.Resampling.LANCZOS)
    png_favicon.save(favicon_png_path, optimize=True, quality=95)
    print(f"Created: {favicon_png_path}")
    
    # Update SVG favicon to use the logo
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0066FF"/>
      <stop offset="100%" style="stop-color:#0052CC"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="16" fill="url(#bg)"/>
  <text x="50" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="700" fill="white" text-anchor="middle">GTA</text>
  <path d="M35 25 Q50 10 65 25" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>
'''
    
    with open(favicon_path, 'w') as f:
        f.write(svg_content)
    print(f"Updated: {favicon_path}")
    
    return True

# Update HTML to use new favicon
def update_html_favicon():
    print("\nUpdating HTML favicon references...")
    
    html_file = "index.html"
    with open(html_file, 'r') as f:
        html_content = f.read()
    
    # Replace favicon references to include .ico and .png versions
    new_favicon_references = '''    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <link rel="mask-icon" href="/favicon.svg" color="#0066FF" />'''
    
    # Find and replace the favicon section
    lines = html_content.split('\n')
    new_lines = []
    in_favicon_section = False
    replaced = False
    
    for line in lines:
        if 'rel="icon"' in line or 'apple-touch-icon' in line or 'mask-icon' in line:
            if not replaced:
                new_lines.append(new_favicon_references)
                replaced = True
            # Skip the original favicon lines
            continue
        else:
            new_lines.append(line)
    
    if not replaced:
        # Insert after <head> tag
        for i, line in enumerate(new_lines):
            if '<head>' in line:
                new_lines.insert(i + 1, new_favicon_references)
                break
    
    with open(html_file, 'w') as f:
        f.write('\n'.join(new_lines))
    
    print(f"Updated: {html_file}")

# Main execution
if __name__ == "__main__":
    print("=== GTA Cleaning Logo Processing ===")
    
    # Check if logo exists
    if not os.path.exists(logo_path):
        print(f"Error: Logo not found at {logo_path}")
        sys.exit(1)
    
    # Optimize logo
    img = optimize_logo()
    
    if img:
        # Create favicon
        create_favicon(img)
        
        # Update HTML
        update_html_favicon()
        
        print("\n✅ Logo processing complete!")
        print("\nCreated files:")
        print("- public/images/logo_32x32.png")
        print("- public/images/logo_64x64.png") 
        print("- public/images/logo_128x128.png")
        print("- public/images/logo_256x256.png")
        print("- public/favicon.ico")
        print("- public/favicon.png")
        print("- public/favicon.svg (updated)")
        print("\nNext: Update the header/footer CSS for better logo display")
    else:
        print("\n❌ Failed to process logo")