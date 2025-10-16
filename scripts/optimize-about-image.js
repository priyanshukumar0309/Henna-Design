/**
 * Optimize the about/artist image
 * This script optimizes Supriya.jpg for web display
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ABOUT_DIR = path.join(__dirname, '../public/assets/about');
const IMAGE_PATH = path.join(ABOUT_DIR, 'Supriya.jpg');
const BACKUP_PATH = path.join(ABOUT_DIR, 'Supriya.jpg.backup');

// Configuration for artist photo
const MAX_WIDTH = 800; // Artist photos don't need to be huge
const QUALITY = 85; // High quality but optimized
const PROGRESSIVE = true;

async function optimizeArtistImage() {
  console.log('\n🎨 Optimizing Artist Photo\n');
  console.log('━'.repeat(50));
  
  try {
    // Check if file exists
    if (!fs.existsSync(IMAGE_PATH)) {
      console.log('❌ Supriya.jpg not found in public/assets/about/');
      return;
    }
    
    // Get original file size
    const originalStats = fs.statSync(IMAGE_PATH);
    const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);
    console.log(`📸 Original: ${originalSize}MB`);
    
    // Create backup
    fs.copyFileSync(IMAGE_PATH, BACKUP_PATH);
    console.log('💾 Backup created');
    
    // Get image info
    const imageInfo = await sharp(IMAGE_PATH).metadata();
    console.log(`📐 Dimensions: ${imageInfo.width}x${imageInfo.height}`);
    
    // Optimize the image
    const optimizedInfo = await sharp(IMAGE_PATH)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: QUALITY,
        progressive: PROGRESSIVE,
        mozjpeg: true
      })
      .toFile(IMAGE_PATH + '.optimized');
    
    // Replace original with optimized
    fs.unlinkSync(IMAGE_PATH);
    fs.renameSync(IMAGE_PATH + '.optimized', IMAGE_PATH);
    
    // Get new file size
    const newStats = fs.statSync(IMAGE_PATH);
    const newSize = (newStats.size / 1024 / 1024).toFixed(2);
    const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${newSize}MB`);
    console.log(`📉 Savings: ${savings}% smaller`);
    console.log(`📐 New dimensions: ${optimizedInfo.width}x${optimizedInfo.height}`);
    
    // Clean up backup
    fs.unlinkSync(BACKUP_PATH);
    
    console.log('\n🎉 Artist photo optimized successfully!');
    console.log('   Perfect for web display without compromising quality.\n');
    
  } catch (error) {
    console.error('❌ Error optimizing image:', error.message);
    
    // Restore from backup if error
    if (fs.existsSync(BACKUP_PATH)) {
      fs.copyFileSync(BACKUP_PATH, IMAGE_PATH);
      fs.unlinkSync(BACKUP_PATH);
      console.log('🔄 Original image restored');
    }
  }
}

optimizeArtistImage();
