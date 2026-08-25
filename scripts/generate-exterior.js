const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/gvavo/.gemini/antigravity/brain/f2312704-b0a6-4469-933a-29f5815ab2ae';
const publicDir = 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/public/assets';
const rootAssetsDir = 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/assets';

async function run() {
  const heroSrc = path.join(brainDir, 'hero_restaurant_1787420744982.jpg');
  
  // Extract a stunning vertical exterior architectural shot showing the stone arch, lanterns, sea view, and tiled roof
  await sharp(heroSrc)
    .extract({ left: 0, top: 0, width: 750, height: 768 })
    .resize(800, 1000, { fit: 'cover' })
    .png({ quality: 92 })
    .toFile(path.join(publicDir, 'exterior.png'));

  fs.copyFileSync(path.join(publicDir, 'exterior.png'), path.join(rootAssetsDir, 'exterior.png'));
  fs.copyFileSync(path.join(publicDir, 'exterior.png'), path.join(brainDir, 'exterior.png'));

  console.log('Exterior image generated successfully!');
}

run().catch(err => {
  console.error('Error generating exterior image:', err);
  process.exit(1);
});
