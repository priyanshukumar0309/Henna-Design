# Assets Directory Structure

This folder contains all static assets (images, icons, logos) for the Nordic Soul Henna website.

## 📁 Folder Organization

### `/gallery/`
Portfolio images showcasing henna artistry work
- **Usage**: Main portfolio gallery section
- **Recommended formats**: JPG, PNG, WebP
- **Recommended size**: 1200x1200px to 2000x2000px (square aspect ratio)
- **Naming convention**: `henna-{category}-{number}.jpg`
  - Examples: `henna-bridal-001.jpg`, `henna-minimalist-002.jpg`

**Categories**:
- `bridal` - Nordic bridal henna designs
- `minimalist` - Minimalist contemporary designs
- `festival` - Festival and celebration designs
- `fusion` - Fusion art pieces
- `photoshoot` - Fashion photoshoot work

### `/hero/`
Hero section and banner images
- **Usage**: Main homepage hero section, large banners
- **Recommended formats**: JPG, WebP
- **Recommended size**: 1920x1080px or larger (16:9 aspect ratio)
- **Examples**: Background images, featured artwork

### `/about/`
Images for the About section
- **Usage**: Artist photos, workspace images, process photos
- **Recommended formats**: JPG, PNG
- **Recommended size**: 800x800px to 1200x1200px
- **Examples**: 
  - `artist-portrait.jpg` - Professional photo of the artist
  - `workspace.jpg` - Studio/workspace images
  - `process-{step}.jpg` - Henna application process

### `/testimonials/`
Client photos for testimonials
- **Usage**: Client profile images in testimonial cards
- **Recommended formats**: JPG, PNG
- **Recommended size**: 200x200px to 400x400px (square aspect ratio)
- **Naming convention**: `client-{initials}-{number}.jpg`
  - Example: `client-sk-001.jpg`

### `/icons/`
Icon sets and small graphics
- **Usage**: UI icons, decorative elements
- **Recommended formats**: SVG (preferred), PNG
- **Recommended size**: Vector (SVG) or 64x64px to 128x128px
- **Examples**: Social media icons, UI elements, decorative motifs

### `/logos/`
Brand logos and branding assets
- **Usage**: Site logo, favicon sources, brand marks
- **Recommended formats**: SVG (preferred), PNG
- **Files needed**:
  - `logo.svg` - Main logo (vector)
  - `logo-light.svg` - Logo for dark backgrounds
  - `logo-dark.svg` - Logo for light backgrounds
  - `favicon.png` - Favicon source (512x512px)

## 🎨 Image Optimization Guidelines

1. **Compress images** before uploading using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)

2. **Use WebP format** when possible for better compression

3. **Responsive images**: Provide multiple sizes for different screen sizes
   - Original: 2000px
   - Large: 1200px
   - Medium: 800px
   - Thumbnail: 400px

4. **File naming**: Use lowercase, hyphens instead of spaces
   - ✅ `nordic-bridal-design-001.jpg`
   - ❌ `Nordic Bridal Design 001.jpg`

## 📝 How to Use in Code

```tsx
// Import from public folder (Vite automatically serves /public)
<img src="/assets/gallery/henna-bridal-001.jpg" alt="Nordic Bridal Henna" />

// For hero images
<img src="/assets/hero/main-banner.jpg" alt="Nordic Soul Henna" />

// For about section
<img src="/assets/about/artist-portrait.jpg" alt="Artist at work" />
```

## 🔄 Updating Supabase

When you upload images to these folders and set up Supabase:

1. Upload actual image files to these folders
2. Update Supabase `portfolio_images` table with:
   - `image_url`: `/assets/gallery/your-image.jpg`
   - `thumbnail_url`: `/assets/gallery/thumbnails/your-image-thumb.jpg`
   - `category`: bridal, minimalist, festival, fusion, or photoshoot

3. The Gallery component will automatically fetch and display them

## 📊 Current Status

- ✅ Folder structure created
- ⏳ Awaiting image uploads
- 🔗 Connected to Gallery, About, Testimonials components

---

**Note**: All files in `/public/assets/` are served directly at `/assets/` URL path in the browser.

