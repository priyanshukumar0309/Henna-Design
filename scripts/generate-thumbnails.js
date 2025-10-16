/**
 * Generate optimized thumbnails for gallery images
 * This script creates small thumbnails (~50KB) for grid display
 * and optimized full-size images (~300KB) for lightbox
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.join(__dirname, '../public/assets/gallery');
const THUMBNAIL_DIR = path.join(GALLERY_DIR, 'thumbnails');

// Configuration
const THUMBNAIL_WIDTH = 600; // Width for grid thumbnails
const THUMBNAIL_QUALITY = 70; // JPEG quality for thumbnails
const FULLSIZE_QUALITY = 85; // JPEG quality for full-size images
const FULLSIZE_MAX_WIDTH = 1920; // Max width for full-size images

async function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✓ Created directory: ${dir}`);
  }
}

async function getImageFiles() {
  const files = fs.readdirSync(GALLERY_DIR);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext) && 
           !file.includes('README') &&
           file !== '.gitkeep';
  });
}

async function generateThumbnail(filename) {
  const inputPath = path.join(GALLERY_DIR, filename);
  const outputPath = path.join(THUMBNAIL_DIR, filename);
  
  try {
    const info = await sharp(inputPath)
      .resize(THUMBNAIL_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: THUMBNAIL_QUALITY,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const inputSize = (inputStats.size / 1024).toFixed(1);
    const outputSize = (info.size / 1024).toFixed(1);
    const savings = ((1 - info.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`  ✓ ${filename}`);
    console.log(`    Original: ${inputSize}KB → Thumbnail: ${outputSize}KB (${savings}% smaller)`);
    
    return { filename, originalSize: inputSize, thumbnailSize: outputSize, savings };
  } catch (error) {
    console.error(`  ✗ Error processing ${filename}:`, error.message);
    return null;
  }
}

async function optimizeFullSize(filename) {
  const inputPath = path.join(GALLERY_DIR, filename);
  const backupPath = path.join(GALLERY_DIR, `${filename}.backup`);
  const tempPath = path.join(GALLERY_DIR, `${filename}.optimized`);
  
  try {
    // Create backup
    fs.copyFileSync(inputPath, backupPath);
    
    const inputStats = fs.statSync(inputPath);
    const inputSize = inputStats.size / 1024;
    
    // Skip if already small enough
    if (inputSize < 400) {
      fs.unlinkSync(backupPath);
      console.log(`  → ${filename} already optimized (${inputSize.toFixed(1)}KB)`);
      return null;
    }
    
    // Optimize
    const info = await sharp(inputPath)
      .resize(FULLSIZE_MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: FULLSIZE_QUALITY,
        progressive: true,
        mozjpeg: true
      })
      .toFile(tempPath);
    
    // Replace original with optimized
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
    const outputSize = (info.size / 1024).toFixed(1);
    const savings = ((1 - info.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`  ✓ Optimized ${filename}: ${inputSize.toFixed(1)}KB → ${outputSize}KB (${savings}% smaller)`);
    
    return { filename, originalSize: inputSize.toFixed(1), optimizedSize: outputSize, savings };
  } catch (error) {
    // Restore from backup if error
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, inputPath);
      fs.unlinkSync(backupPath);
    }
    console.error(`  ✗ Error optimizing ${filename}:`, error.message);
    return null;
  } finally {
    // Cleanup
    if (fs.existsSync(backupPath)) {
      fs.unlinkSync(backupPath);
    }
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function main() {
  console.log('\n🎨 Gallery Image Optimizer\n');
  console.log('━'.repeat(60));
  
  // Ensure thumbnail directory exists
  await ensureDirectoryExists(THUMBNAIL_DIR);
  
  // Get all image files
  const imageFiles = await getImageFiles();
  console.log(`\nFound ${imageFiles.length} images to process\n`);
  
  // Process thumbnails
  console.log('📸 Generating thumbnails...\n');
  const thumbnailResults = [];
  for (const file of imageFiles) {
    const result = await generateThumbnail(file);
    if (result) thumbnailResults.push(result);
  }
  
  // Optimize full-size images
  console.log('\n🔧 Optimizing full-size images...\n');
  const optimizeResults = [];
  for (const file of imageFiles) {
    const result = await optimizeFullSize(file);
    if (result) optimizeResults.push(result);
  }
  
  // Summary
  console.log('\n' + '━'.repeat(60));
  console.log('\n✨ Summary:\n');
  
  if (thumbnailResults.length > 0) {
    const totalOriginal = thumbnailResults.reduce((sum, r) => sum + parseFloat(r.originalSize), 0);
    const totalThumbnail = thumbnailResults.reduce((sum, r) => sum + parseFloat(r.thumbnailSize), 0);
    const avgSavings = thumbnailResults.reduce((sum, r) => sum + parseFloat(r.savings), 0) / thumbnailResults.length;
    
    console.log(`Thumbnails Created: ${thumbnailResults.length}`);
    console.log(`Total Size Reduction: ${totalOriginal.toFixed(1)}KB → ${totalThumbnail.toFixed(1)}KB`);
    console.log(`Average Savings: ${avgSavings.toFixed(1)}%`);
  }
  
  if (optimizeResults.length > 0) {
    const totalOriginal = optimizeResults.reduce((sum, r) => sum + parseFloat(r.originalSize), 0);
    const totalOptimized = optimizeResults.reduce((sum, r) => sum + parseFloat(r.optimizedSize), 0);
    const avgSavings = optimizeResults.reduce((sum, r) => sum + parseFloat(r.savings), 0) / optimizeResults.length;
    
    console.log(`\nFull-Size Images Optimized: ${optimizeResults.length}`);
    console.log(`Total Size Reduction: ${totalOriginal.toFixed(1)}KB → ${totalOptimized.toFixed(1)}KB`);
    console.log(`Average Savings: ${avgSavings.toFixed(1)}%`);
  }
  
  console.log('\n✅ Done! Your images are now optimized.\n');
  console.log('Next steps:');
  console.log('  1. Check the thumbnails in public/assets/gallery/thumbnails/');
  console.log('  2. Test the gallery in your browser');
  console.log('  3. Commit only the optimized images (original large files excluded from git)\n');
}

main().catch(console.error);

