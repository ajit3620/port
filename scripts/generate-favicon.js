const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  try {
    // Read the SVG file
    const svgBuffer = await fs.readFile(path.join(__dirname, '../public/favicon.svg'));

    // Generate icon.png (32x32)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, '../public/icon.png'));

    // Generate apple-icon.png (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(__dirname, '../public/apple-icon.png'));

    console.log('Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 