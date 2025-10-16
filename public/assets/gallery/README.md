# Gallery Images

## Important: Images Not in Git

Gallery images are excluded from git to save Netlify deployment bandwidth (each deploy was costing 20MB+).

## Setup Instructions

### Local Development
1. Keep all your gallery images in this folder locally
2. Images will work fine in development

### Production Deployment
Choose one of these options:

#### Option 1: Netlify Large Media (Recommended)
```bash
netlify plugins:install netlify-lm-plugin
netlify lm:install
netlify lm:setup
```

#### Option 2: Manual Upload via Netlify UI
1. Build locally: `npm run build`
2. Upload `dist/` folder via Netlify UI
3. Images will be included in the build

#### Option 3: Use CDN/Cloud Storage
- Upload images to Cloudinary, AWS S3, or Netlify CDN
- Update image URLs in `src/components/Gallery.tsx`

## Current Images (25 total, ~14MB)

All images should be optimized:
- Thumbnails: ~50KB (for grid display)
- Full-size: ~300KB max (for lightbox)
- Format: WebP preferred, JPG fallback

