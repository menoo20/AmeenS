/**
 * Asset Synchronization Script for Abo Ameen Digital Home
 * 
 * This script organizes and imports all your existing assets:
 * - CV documents from docs/cv/
 * - Personal and work photos from images/
 * - Programming and teaching certificates
 * 
 * It creates the proper structure for the fullstack application
 */

const fs = require('fs');
const path = require('path');

// Source paths (your existing files)
const SOURCE_BASE = '../../';
const DOCS_SOURCE = path.join(SOURCE_BASE, 'docs');
const IMAGES_SOURCE = path.join(SOURCE_BASE, 'images');

// Target paths (Next.js public directory)
const PUBLIC_DIR = './public';
const ASSETS_DIR = path.join(PUBLIC_DIR, 'assets');

// Asset categories
const ASSET_CATEGORIES = {
  cv: path.join(ASSETS_DIR, 'cv'),
  personalPhotos: path.join(ASSETS_DIR, 'photos/personal'),
  workPhotos: path.join(ASSETS_DIR, 'photos/work'),
  programmingCerts: path.join(ASSETS_DIR, 'certificates/programming'),
  teachingCerts: path.join(ASSETS_DIR, 'certificates/teaching')
};

/**
 * Ensure all necessary directories exist
 */
function createDirectories() {
  console.log('📁 Creating directory structure...');
  
  Object.values(ASSET_CATEGORIES).forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`   ✅ Created: ${dir}`);
    }
  });
  
  // Create uploads directory for future file uploads
  const uploadsDir = path.join(PUBLIC_DIR, 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log(`   ✅ Created: ${uploadsDir}`);
  }
}

/**
 * Copy CV documents
 */
function syncCVDocuments() {
  console.log('📄 Syncing CV documents...');
  
  const cvSource = path.join(DOCS_SOURCE, 'cv');
  if (!fs.existsSync(cvSource)) {
    console.log('   ⚠️  CV source directory not found');
    return;
  }
  
  const files = fs.readdirSync(cvSource);
  files.forEach(file => {
    if (file.toLowerCase().endsWith('.pdf')) {
      const sourcePath = path.join(cvSource, file);
      const targetPath = path.join(ASSET_CATEGORIES.cv, file);
      
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`   ✅ Copied CV: ${file}`);
    }
  });
}

/**
 * Copy and organize photos
 */
function syncPhotos() {
  console.log('📸 Syncing photos...');
  
  // Personal photos
  const personalSource = path.join(IMAGES_SOURCE, 'My images/my personal image');
  if (fs.existsSync(personalSource)) {
    const files = fs.readdirSync(personalSource);
    files.forEach(file => {
      if (isImageFile(file)) {
        const sourcePath = path.join(personalSource, file);
        const targetPath = path.join(ASSET_CATEGORIES.personalPhotos, file);
        
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`   ✅ Copied personal photo: ${file}`);
      }
    });
  }
  
  // Work photos
  const workSource = path.join(IMAGES_SOURCE, 'My images/work images as teacher');
  if (fs.existsSync(workSource)) {
    const files = fs.readdirSync(workSource);
    files.forEach(file => {
      if (isImageFile(file)) {
        const sourcePath = path.join(workSource, file);
        const targetPath = path.join(ASSET_CATEGORIES.workPhotos, file);
        
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`   ✅ Copied work photo: ${file}`);
      }
    });
  }
}

/**
 * Copy certificates
 */
function syncCertificates() {
  console.log('🏆 Syncing certificates...');
  
  // Programming certificates
  const progSource = path.join(IMAGES_SOURCE, 'programming certificates');
  if (fs.existsSync(progSource)) {
    const files = fs.readdirSync(progSource);
    files.forEach(file => {
      if (isImageFile(file)) {
        const sourcePath = path.join(progSource, file);
        const targetPath = path.join(ASSET_CATEGORIES.programmingCerts, file);
        
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`   ✅ Copied programming cert: ${file}`);
      }
    });
  }
  
  // Teaching certificates
  const teachSource = path.join(IMAGES_SOURCE, 'teaching certificates');
  if (fs.existsSync(teachSource)) {
    const files = fs.readdirSync(teachSource);
    files.forEach(file => {
      if (isImageFile(file)) {
        const sourcePath = path.join(teachSource, file);
        const targetPath = path.join(ASSET_CATEGORIES.teachingCerts, file);
        
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`   ✅ Copied teaching cert: ${file}`);
      }
    });
  }
}

/**
 * Generate asset manifest
 */
function generateAssetManifest() {
  console.log('📋 Generating asset manifest...');
  
  const manifest = {
    lastUpdated: new Date().toISOString(),
    categories: {}
  };
  
  let totalFiles = 0;
  
  Object.entries(ASSET_CATEGORIES).forEach(([category, dir]) => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).map(file => ({
        filename: file,
        path: `/assets/${path.relative(ASSETS_DIR, path.join(dir, file))}`.replace(/\\/g, '/'),
        size: fs.statSync(path.join(dir, file)).size,
        lastModified: fs.statSync(path.join(dir, file)).mtime.toISOString()
      }));
      
      manifest.categories[category] = files;
      totalFiles += files.length;
    }
  });
  
  const manifestPath = path.join(PUBLIC_DIR, 'asset-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`   ✅ Generated manifest: ${totalFiles} total files`);
}

/**
 * Helper function to check if file is an image
 */
function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting Asset Synchronization for Abo Ameen Digital Home');
  console.log('='.repeat(60));
  
  try {
    createDirectories();
    syncCVDocuments();
    syncPhotos();
    syncCertificates();
    generateAssetManifest();
    
    console.log('\n🎉 Asset synchronization completed successfully!');
    console.log('Your files are now properly organized for the fullstack application.');
    
  } catch (error) {
    console.error('❌ Error during asset sync:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };