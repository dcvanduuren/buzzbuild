import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  const logoIn = path.join(process.cwd(), 'public', 'assets', 'images', 'Logo.png');
  const logoOut = path.join(process.cwd(), 'public', 'assets', 'images', 'Logo.webp');
  
  if (fs.existsSync(logoIn)) {
    console.log('Optimizing Logo.png...');
    await sharp(logoIn)
      .resize({ width: 200, height: 200, fit: 'inside' })
      .webp({ quality: 80 })
      .toFile(logoOut);
    console.log('Created Logo.webp');
  }

  const handshakePath = path.join(process.cwd(), 'public', 'assets', 'images', 'optimized', 'handshake.webp');
  const handshakeOut = path.join(process.cwd(), 'public', 'assets', 'images', 'optimized', 'handshake-opt.webp');
  if (fs.existsSync(handshakePath)) {
    console.log('Optimizing handshake.webp...');
    await sharp(handshakePath)
      .resize({ width: 800, height: 800, fit: 'inside' })
      .webp({ quality: 80 })
      .toFile(handshakeOut);
    
    console.log('Created handshake-opt.webp');
  }
}

optimizeImages().catch(console.error);
