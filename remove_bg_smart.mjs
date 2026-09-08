import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const productDir = 'c:/Currymiya_Project26/Currymiya-project/src/assets/product';

function getAllPngFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllPngFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.png')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function removeWhiteBackgroundSmart(filePath) {
  try {
    const image = sharp(filePath);
    const { width, height } = await image.metadata();
    const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

    const visited = new Uint8Array(width * height);
    const queue = [];

    // Helper to get pixel index
    const getIdx = (x, y) => (y * width + x) * 4;

    // Helper to check if a pixel is white/near-white outer background
    const isWhite = (x, y) => {
      const idx = getIdx(x, y);
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      return r >= 242 && g >= 242 && b >= 242;
    };

    // 1. Seed flood fill from image outer borders
    for (let x = 0; x < width; x++) {
      if (isWhite(x, 0)) queue.push(x, 0);
      if (isWhite(x, height - 1)) queue.push(x, height - 1);
    }
    for (let y = 0; y < height; y++) {
      if (isWhite(0, y)) queue.push(0, y);
      if (isWhite(width - 1, y)) queue.push(width - 1, y);
    }

    // 2. BFS Flood fill to mark ONLY outer white background pixels
    let qIdx = 0;
    while (qIdx < queue.length) {
      const x = queue[qIdx++];
      const y = queue[qIdx++];
      const pIdx = y * width + x;

      if (visited[pIdx]) continue;
      visited[pIdx] = 1;

      // Check 4 neighbors
      const neighbors = [
        [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const npIdx = ny * width + nx;
          if (!visited[npIdx] && isWhite(nx, ny)) {
            queue.push(nx, ny);
          }
        }
      }
    }

    // 3. Make only outer flood-filled pixels transparent with smooth edge antialiasing
    let modified = false;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pIdx = y * width + x;
        if (visited[pIdx]) {
          const idx = getIdx(x, y);
          data[idx + 3] = 0; // Transparent
          modified = true;
        }
      }
    }

    if (modified) {
      const tempPath = filePath + '.tmp.png';
      // Save PNG with sharp high-quality compression
      await sharp(data, {
        raw: { width: info.width, height: info.height, channels: 4 }
      })
      .png({ quality: 100, compressionLevel: 6 })
      .toFile(tempPath);

      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      console.log(`Clean BG Removed: ${path.basename(filePath)}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

async function run() {
  const files = getAllPngFiles(productDir);
  console.log(`Found ${files.length} product PNG images. Starting SMART outer-border background removal...`);
  
  for (const file of files) {
    await removeWhiteBackgroundSmart(file);
  }
  
  console.log("SMART BACKGROUND REMOVAL COMPLETED!");
}

run();
