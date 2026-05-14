import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  // Logo
  const logoPath = path.join(process.cwd(), 'public', 'assets', 'images', 'Logo.webp');
  if (fs.existsSync(logoPath)) {
    console.log('Optimizing Logo.webp...');
    const inBuf = fs.readFileSync(logoPath);
    const buffer = await sharp(inBuf).resize(76, 76).webp({ quality: 80 }).toBuffer();
    fs.writeFileSync(logoPath, buffer);
  }

  // Handshake
  const handshakePath = path.join(process.cwd(), 'public', 'assets', 'images', 'optimized', 'handshake-opt.webp');
  if (fs.existsSync(handshakePath)) {
    console.log('Optimizing handshake-opt.webp...');
    const inBuf = fs.readFileSync(handshakePath);
    const buffer = await sharp(inBuf).webp({ quality: 65 }).toBuffer();
    fs.writeFileSync(handshakePath, buffer);
  }

  // Badkamer 1 thumb
  const b1Thumb = path.join(process.cwd(), 'public', 'assets', 'images', 'optimized', 'badkamer 1', '1-thumb.webp');
  if (fs.existsSync(b1Thumb)) {
    console.log('Optimizing badkamer 1/1-thumb.webp...');
    const inBuf = fs.readFileSync(b1Thumb);
    const buffer = await sharp(inBuf).resize({ width: 512 }).webp({ quality: 80 }).toBuffer();
    fs.writeFileSync(b1Thumb, buffer);
  }

  // Badkamer 2 thumb
  const b2Thumb = path.join(process.cwd(), 'public', 'assets', 'images', 'optimized', 'badkamer 2', 'Manon 1-thumb.webp');
  if (fs.existsSync(b2Thumb)) {
    console.log('Optimizing badkamer 2/Manon 1-thumb.webp...');
    const inBuf = fs.readFileSync(b2Thumb);
    const buffer = await sharp(inBuf).resize({ width: 512 }).webp({ quality: 80 }).toBuffer();
    fs.writeFileSync(b2Thumb, buffer);
  }
}

optimizeImages().catch(console.error);
