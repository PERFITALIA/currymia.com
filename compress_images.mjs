import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIRS_TO_PROCESS = [
  path.join(__dirname, 'public'),
  path.join(__dirname, 'src', 'assets')
];

const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;

function getAllImageFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      arrayOfFiles = getAllImageFiles(fullPath, arrayOfFiles);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

async function compressImage(filePath) {
  try {
    const statBefore = fs.statSync(filePath);
    const sizeBeforeKb = (statBefore.size / 1024).toFixed(1);

    // Skip small images under 100 KB unless it's a giant favicon
    const isFavicon = path.basename(filePath).toLowerCase().includes('favicon');
    if (statBefore.size < 100 * 1024 && !isFavicon) {
      return;
    }

    const image = sharp(filePath);
    const metadata = await image.metadata();

    let transform = image.clone();

    // 1. Special handling for Favicon (resize to max 64x64)
    if (isFavicon) {
      transform = transform.resize({ width: 64, height: 64, fit: 'inside' });
    } 
    // 2. Resize high Megapixel images (if width > 1920)
    else if (metadata.width > MAX_WIDTH) {
      transform = transform.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    // 3. Compress based on format
    const format = metadata.format;
    const tempPath = filePath + '.tmp';

    if (format === 'png') {
      await transform.png({ quality: 80, compressionLevel: 8 }).toFile(tempPath);
    } else if (format === 'jpeg' || format === 'jpg') {
      await transform.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
    } else {
      return;
    }

    const statAfter = fs.statSync(tempPath);
    const sizeAfterKb = (statAfter.size / 1024).toFixed(1);

    // Only overwrite if the size actually reduced
    if (statAfter.size < statBefore.size) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      const savedPercent = (((statBefore.size - statAfter.size) / statBefore.size) * 100).toFixed(0);
      console.log(`✓ Compressed: ${path.relative(__dirname, filePath)} (${sizeBeforeKb} KB -> ${sizeAfterKb} KB, -${savedPercent}%)`);
    } else {
      fs.unlinkSync(tempPath);
    }
  } catch (err) {
    console.error(`X Error compressing ${filePath}:`, err.message);
  }
}

async function run() {
  console.log('🚀 Starting automatic image compression...');
  let allFiles = [];
  DIRS_TO_PROCESS.forEach(dir => {
    allFiles = getAllImageFiles(dir, allFiles);
  });

  console.log(`Found ${allFiles.length} image files to check.`);
  for (const file of allFiles) {
    await compressImage(file);
  }
  console.log('✨ All images processed successfully!');
}

run();
