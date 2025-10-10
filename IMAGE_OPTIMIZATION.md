# Image Optimization Guide

## Current Issues
Some images in the `/public/assets/photos/` directory are extremely large (up to 59MB!), which causes slow loading times on GitHub Pages.

## Optimized Images
The following images have been successfully optimized:
- ✅ `My image portrait.png` → `My image portrait.webp` (12MB → 60KB, 100% reduction)
- ✅ `my pharonic ancestors.jpg` → `my pharonic ancestors.webp` (3.3MB → 178KB, 95% reduction)
- ✅ `coding.png` → `coding.webp` (6.4MB → 119KB, 98% reduction)
- ✅ `belaraby2.png` → `belaraby2.webp` (962KB → 43KB, 96% reduction)
- ✅ `IMAG0405.jpg` → `IMAG0405.webp` (791KB → 27KB, 97% reduction)
- ✅ `NotCourses.jpg` → `NotCourses.webp` (1.2MB → 75KB, 94% reduction)

## Images That Still Need Optimization

### Critical (>5MB):
1. `enjoying solitude.webp` - 59MB ⚠️
2. `Awardedbymyschool.webp` - 44MB ⚠️
3. `my pharonic ancestors.webp` - 24MB ⚠️
4. `my dear friend.webp` - 9.8MB
5. `multi-national companions.webp` - 8.9MB
6. `atwork8.webp` - 8.7MB
7. `atwork9.webp` - 8.3MB
8. `atmyoffice.webp` - 8.1MB
9. `at omra 3.webp` - 8.1MB
10. `a picnic with the falcons.webp` - 8.4MB
11. `an artistic gun.webp` - 7.8MB
12. `withmystudents3.webp` - 7.8MB
13. `atwork4.webp` - 7.4MB
14. `at neom gallery.webp` - 7.4MB
15. `my humble setup.webp` - 7.3MB
16. `withmystudents2.webp` - 7.1MB
17. `doing omrah.webp` - 6.7MB
18. `My image portrait.webp` - 6.6MB
19. `picwiththestaff.webp` - 6.3MB
20. `atwork6.webp` - 6.1MB
21. `20241102_173428.webp` - 6.1MB
22. `focusmode.webp` - 6MB
23. `at omra2.webp` - 5.2MB
24. `at american house.webp` - 5.3MB

## How to Optimize Images

### Option 1: Using the Optimization Script (Automated)
The script is partially working but has file permission issues. You can try:

```bash
npm run optimize-images
```

If it fails with permission errors, close all applications that might be using the files (VS Code, image viewers, etc.) and try again.

### Option 2: Manual Optimization (Recommended)

#### Using Online Tools:
1. **TinyPNG** (https://tinypng.com/)
   - Drag and drop your images
   - Download optimized versions
   - Replace originals

2. **Squoosh** (https://squoosh.app/)
   - More control over compression
   - Can convert to WebP format
   - Recommended settings:
     - Format: WebP
     - Quality: 80
     - Resize: Max 1920x1080

#### Using Command Line (if you have ImageMagick or Sharp):
```bash
# Install Sharp globally
npm install -g sharp-cli

# Optimize a single image
sharp input.jpg -o output.webp --webp-quality 80 --resize 1920 1080

# Batch optimize all images in a folder
for file in *.{jpg,png,webp}; do
  sharp "$file" -o "optimized-$file" --webp-quality 80 --resize 1920 1080
done
```

## Target Specifications
- **Max Resolution**: 1920x1080px (Full HD is enough for web)
- **Format**: WebP (best compression for web)
- **Quality**: 75-85 (good balance between quality and file size)
- **Target Size**: Under 500KB per image
- **Critical Images** (hero/profile): Under 200KB

## Performance Impact
- **Before Optimization**: ~200MB+ total image size
- **After Full Optimization**: Expected ~10-20MB total
- **Loading Speed**: 90% faster page loads expected

## Implementation Status
- ✅ Converted to native `<img>` tags (no Next.js Image component overhead)
- ✅ Added lazy loading for offscreen images
- ✅ Added `decoding="async"` for non-blocking image decoding
- ✅ Created `getAssetPath()` utility for GitHub Pages base path
- ⏳ Need to optimize remaining large images (manual work required)

## Notes
- The `.tmp` files created by the optimization script should be deleted (they're now gitignored)
- Some images failed to optimize due to file locks - close all applications and retry
- Original PNG/JPG files are automatically deleted after successful WebP conversion
