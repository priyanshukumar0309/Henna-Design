# Assets Usage Examples

## 📸 How to Add Images to Your Website

### Step 1: Add Images to Folders

Place your images in the appropriate folders:

```
public/assets/
├── gallery/
│   ├── henna-bridal-001.jpg          👈 Add your portfolio images here
│   ├── henna-bridal-002.jpg
│   ├── henna-minimalist-001.jpg
│   └── thumbnails/
│       ├── henna-bridal-001.jpg      👈 Add smaller versions here
│       └── henna-bridal-002.jpg
├── hero/
│   └── main-banner.jpg                👈 Add hero/banner images here
├── about/
│   ├── artist-portrait.jpg            👈 Add your photo here
│   └── workspace.jpg
├── testimonials/
│   └── client-sk-001.jpg              👈 Add client photos here
└── logos/
    └── logo.svg                        👈 Add your logo here
```

### Step 2: Reference in Supabase

When you set up Supabase, add records to `portfolio_images` table:

```sql
INSERT INTO portfolio_images (title, description, image_url, thumbnail_url, category, featured, tags)
VALUES 
  (
    'Nordic Bridal Design',
    'Elegant minimalist bridal henna with Scandinavian touches',
    '/assets/gallery/henna-bridal-001.jpg',           -- ✅ Full size image
    '/assets/gallery/thumbnails/henna-bridal-001.jpg', -- ✅ Thumbnail
    'bridal',
    true,
    ARRAY['bridal', 'minimalist', 'nordic']
  );
```

### Step 3: Use Directly in Components (Optional)

You can also use images directly in your React components:

```tsx
// In Hero.tsx
<img 
  src="/assets/hero/main-banner.jpg" 
  alt="Svensk Henna"
  className="w-full h-full object-cover"
/>

// In About.tsx
<img 
  src="/assets/about/artist-portrait.jpg" 
  alt="Artist at work"
  className="rounded-lg shadow-xl"
/>

// In Navigation.tsx (for logo)
<img 
  src="/assets/logos/logo.svg" 
  alt="Svensk Henna Logo"
  className="h-10 w-auto"
/>
```

## 🎨 Quick Start: Adding Your First Gallery Image

1. **Prepare your image**:
   - Full size: 1200x1200px or larger
   - Thumbnail: 400x400px
   - Format: JPG or WebP
   - Compress it using TinyPNG

2. **Name it properly**:
   ```
   henna-bridal-001.jpg  (for full size)
   henna-bridal-001.jpg  (for thumbnail, same name)
   ```

3. **Place files**:
   ```bash
   # Copy to the right folders
   cp your-image.jpg public/assets/gallery/henna-bridal-001.jpg
   cp your-image-thumb.jpg public/assets/gallery/thumbnails/henna-bridal-001.jpg
   ```

4. **Add to Supabase** (when configured):
   - Go to Supabase dashboard
   - Open `portfolio_images` table
   - Click "Insert Row"
   - Fill in:
     - title: "Nordic Bridal Design"
     - image_url: `/assets/gallery/henna-bridal-001.jpg`
     - thumbnail_url: `/assets/gallery/thumbnails/henna-bridal-001.jpg`
     - category: `bridal`
     - featured: `true`

5. **View on website**:
   - Visit http://localhost:5175
   - Navigate to Portfolio section
   - Your image appears automatically! ✨

## 📱 Responsive Images (Advanced)

For better performance, you can create multiple sizes:

```tsx
// Using srcset for responsive images
<img
  src="/assets/gallery/henna-bridal-001.jpg"
  srcSet="
    /assets/gallery/thumbnails/henna-bridal-001.jpg 400w,
    /assets/gallery/henna-bridal-001.jpg 1200w,
    /assets/gallery/henna-bridal-001-large.jpg 2000w
  "
  sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Nordic Bridal Henna"
/>
```

## 🔍 Finding Images in the Code

Current components using images:

1. **Gallery.tsx** - `src/components/Gallery.tsx`
   - Fetches from Supabase `portfolio_images` table
   - Displays images from `/assets/gallery/`

2. **About.tsx** - `src/components/About.tsx`
   - Can use images from `/assets/about/`

3. **Testimonials.tsx** - `src/components/Testimonials.tsx`
   - Can use images from `/assets/testimonials/`

4. **Hero.tsx** - `src/components/Hero.tsx`
   - Can use images from `/assets/hero/`

## 💡 Tips

- **Always compress images** before uploading
- **Use WebP** for better file sizes
- **Keep original files** backed up elsewhere
- **Name files descriptively** for easy searching
- **Use consistent naming** (lowercase, hyphens)
- **Add alt text** for accessibility

---

**Ready to add images? Just drop them in the folders and update Supabase!** 🎨

