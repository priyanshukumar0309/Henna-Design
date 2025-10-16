# Gallery Images

## ✅ Optimized Deployment Strategy

**Current Setup:**
- ✅ **Thumbnails** (1.3MB total) are committed to Git and deploy to Netlify
- ✅ **Full-size images** (~14MB) are kept locally and excluded from Git
- ✅ Deployment size reduced from 20MB+ to ~1.5MB per deploy

## How It Works

### Gallery Display Strategy
1. **Grid View**: Uses optimized thumbnails (~50KB each) for fast loading
2. **Lightbox View**: Loads full-size images on-demand when user clicks
3. **Progressive Loading**: Shows blurred thumbnail while full image loads

### Local Development
1. Keep all your gallery images in this folder locally (`public/assets/gallery/`)
2. Keep all thumbnails in `public/assets/gallery/thumbnails/`
3. Images work perfectly in development (`npm run dev`)

### Production Deployment (Netlify)

**Current Method**: Thumbnails in Git + Local Build
- Thumbnails are in Git and deploy automatically
- For full-size images, build locally and upload:
  ```bash
  npm run build
  # Upload dist/ folder via Netlify UI
  ```

**Alternative Options**:

#### Option 1: Use CDN/Cloud Storage (Recommended for scale)
- Upload full-size images to Cloudinary, AWS S3, or Imgix
- Update image URLs in `src/components/Gallery.tsx`
- Thumbnails continue to work from Git

#### Option 2: Netlify Large Media
```bash
netlify plugins:install netlify-lm-plugin
netlify lm:install
netlify lm:setup
```

## Image Optimization

### Current Images (25 total)
- **Thumbnails**: 1.3MB total (25 files, ~50KB each)
- **Full-size**: ~10MB total (optimized from 14MB)

### Optimization Scripts
```bash
# Generate thumbnails for all gallery images
npm run optimize-images

# Optimize the artist photo
npm run optimize-about
```

### Optimization Specs
- **Thumbnails**: 600px width, 70% JPEG quality
- **Full-size**: 85% JPEG quality, progressive encoding
- **Format**: JPEG (WebP upgrade possible)

