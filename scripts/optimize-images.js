const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

// Directories to optimize
const dirsToOptimize = [
  'public/assets/photos/personal',
  'public/assets/photos/work',
  'public/assets/projects'
];

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    
    // Skip non-image files
    if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
      return;
    }

    const stats = fs.statSync(filePath);
    const sizeInKB = stats.size / 1024;

    // Skip if already small enough (under 500KB)
    if (sizeInKB < 500) {
      console.log(`✓ Skipping ${path.basename(filePath)} (${Math.round(sizeInKB)}KB - already optimized)`);
      return;
    }

    console.log(`⚙ Processing ${path.basename(filePath)} (${Math.round(sizeInKB)}KB)...`);

    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if too large
    let resized = image;
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      resized = image.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Convert to WebP with optimization
    const outputPath = filePath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
    
    await resized
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath + '.tmp');

    // Replace original with optimized version
    fs.renameSync(outputPath + '.tmp', outputPath);

    const newStats = fs.statSync(outputPath);
    const newSizeInKB = newStats.size / 1024;
    const savings = Math.round(((sizeInKB - newSizeInKB) / sizeInKB) * 100);

    console.log(`✓ Optimized to ${Math.round(newSizeInKB)}KB (${savings}% reduction)`);

    // Delete original if it was a different format
    if (outputPath !== filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`  Deleted original ${path.basename(filePath)}`);
    }

  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

async function optimizeDirectory(dirPath) {
  console.log(`\n📁 Optimizing images in: ${dirPath}\n`);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      await optimizeImage(filePath);
    }
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('================================\n');
  console.log(`Max dimensions: ${MAX_WIDTH}x${MAX_HEIGHT}`);
  console.log(`Quality: ${QUALITY}`);
  console.log(`Format: WebP\n`);

  for (const dir of dirsToOptimize) {
    await optimizeDirectory(dir);
  }

  console.log('\n✨ Image optimization complete!\n');
}

main().catch(console.error);
