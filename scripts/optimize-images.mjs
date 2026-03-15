/**
 * Image Optimization Script for Buzzbuild
 * 
 * Converts all project images to optimized WebP format:
 * - Full-size: max 1600px wide, quality 80 (for modal view)
 * - Thumbnails: max 600px wide, quality 75 (for project grid cards)
 * - Also optimizes standalone images (team photos, handshake, etc.)
 * 
 * Output structure:
 *   public/assets/images/optimized/
 *     badkamer 1/
 *       1.webp          (full size)
 *       1-thumb.webp     (thumbnail)
 *     diederik.webp
 *     handshake.webp
 *     ...
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '..', 'public', 'assets', 'images');
const OUTPUT_DIR = path.join(SOURCE_DIR, 'optimized');

const FULL_MAX_WIDTH = 1600;
const FULL_QUALITY = 80;

const THUMB_MAX_WIDTH = 600;
const THUMB_QUALITY = 75;

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'];

// Directories to skip
const SKIP_DIRS = ['optimized', 'logo'];

async function optimizeImage(inputPath, outputDir, baseName) {
  const fullOutputPath = path.join(outputDir, `${baseName}.webp`);
  const thumbOutputPath = path.join(outputDir, `${baseName}-thumb.webp`);

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  const metadata = await sharp(inputPath).metadata();
  const originalSizeMB = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);

  // Generate full-size optimized version
  await sharp(inputPath)
    .rotate() // auto-rotate based on EXIF orientation
    .resize(FULL_MAX_WIDTH, null, { withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: FULL_QUALITY })
    .toFile(fullOutputPath);

  const fullSizeMB = (fs.statSync(fullOutputPath).size / 1024 / 1024).toFixed(2);

  // Generate thumbnail
  await sharp(inputPath)
    .rotate() // auto-rotate based on EXIF orientation
    .resize(THUMB_MAX_WIDTH, null, { withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: THUMB_QUALITY })
    .toFile(thumbOutputPath);

  const thumbSizeKB = (fs.statSync(thumbOutputPath).size / 1024).toFixed(0);

  console.log(
    `  ✅ ${path.basename(inputPath)} (${originalSizeMB}MB) → full: ${fullSizeMB}MB, thumb: ${thumbSizeKB}KB`
  );
}

async function processDirectory(dir, relativeDir = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.includes(entry.name)) continue;
      const newRelDir = path.join(relativeDir, entry.name);
      console.log(`\n📁 Processing folder: ${newRelDir || 'root'}`);
      await processDirectory(fullPath, newRelDir);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (!IMAGE_EXTENSIONS.includes(ext)) continue;

      const baseName = path.basename(entry.name, ext);
      const outputSubDir = path.join(OUTPUT_DIR, relativeDir);

      try {
        await optimizeImage(fullPath, outputSubDir, baseName);
      } catch (err) {
        console.error(`  ❌ Failed: ${entry.name} — ${err.message}`);
      }
    }
  }
}

async function main() {
  console.log('🚀 Buzzbuild Image Optimizer');
  console.log('============================');
  console.log(`Source:  ${SOURCE_DIR}`);
  console.log(`Output:  ${OUTPUT_DIR}`);
  console.log(`Full:    max ${FULL_MAX_WIDTH}px, quality ${FULL_QUALITY}`);
  console.log(`Thumbs:  max ${THUMB_MAX_WIDTH}px, quality ${THUMB_QUALITY}`);
  console.log('');

  // Clean output dir
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  await processDirectory(SOURCE_DIR);

  // Summary
  const countFiles = (dir) => {
    let count = 0;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) count += countFiles(path.join(dir, e.name));
      else count++;
    }
    return count;
  };

  const totalDirSize = (dir) => {
    let size = 0;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const fp = path.join(dir, e.name);
      if (e.isDirectory()) size += totalDirSize(fp);
      else size += fs.statSync(fp).size;
    }
    return size;
  };

  const outputFiles = countFiles(OUTPUT_DIR);
  const outputSizeMB = (totalDirSize(OUTPUT_DIR) / 1024 / 1024).toFixed(2);

  console.log('\n============================');
  console.log(`✨ Done! Generated ${outputFiles} optimized files.`);
  console.log(`📦 Total optimized size: ${outputSizeMB} MB`);
}

main().catch(console.error);
