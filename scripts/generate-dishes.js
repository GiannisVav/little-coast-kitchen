const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/gvavo/.gemini/antigravity/brain/f2312704-b0a6-4469-933a-29f5815ab2ae';
const publicDir = 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/public/assets/showcased-dishes';
const rootAssetsDir = 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/assets/showcased-dishes';

[publicDir, rootAssetsDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function run() {
  // 1. Chicken Souvlaki
  const chickenSrc = path.join(brainDir, 'chicken_souvlaki_1787421134510.jpg');
  await sharp(chickenSrc)
    .resize(800, 800, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'chicken-souvlaki.png'));
  fs.copyFileSync(path.join(publicDir, 'chicken-souvlaki.png'), path.join(rootAssetsDir, 'chicken-souvlaki.png'));
  fs.copyFileSync(path.join(publicDir, 'chicken-souvlaki.png'), path.join(brainDir, 'chicken-souvlaki.png'));

  // 2. Grilled Salmon
  const salmonSrc = path.join(brainDir, 'grilled_salmon_1787421150760.jpg');
  await sharp(salmonSrc)
    .resize(800, 800, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'grilled-salmon.png'));
  fs.copyFileSync(path.join(publicDir, 'grilled-salmon.png'), path.join(rootAssetsDir, 'grilled-salmon.png'));
  fs.copyFileSync(path.join(publicDir, 'grilled-salmon.png'), path.join(brainDir, 'grilled-salmon.png'));

  // 3. Lamb Chops
  const lambSrc = path.join(brainDir, 'lamb_chops_1787421169556.jpg');
  await sharp(lambSrc)
    .resize(800, 800, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'lamb-chops.png'));
  fs.copyFileSync(path.join(publicDir, 'lamb-chops.png'), path.join(rootAssetsDir, 'lamb-chops.png'));
  fs.copyFileSync(path.join(publicDir, 'lamb-chops.png'), path.join(brainDir, 'lamb-chops.png'));

  // 4. Grilled Octopus
  const octopusSrc = path.join(brainDir, 'grilled_octopus_1787421189412.jpg');
  await sharp(octopusSrc)
    .resize(800, 800, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'grilled-octopus.png'));
  fs.copyFileSync(path.join(publicDir, 'grilled-octopus.png'), path.join(rootAssetsDir, 'grilled-octopus.png'));
  fs.copyFileSync(path.join(publicDir, 'grilled-octopus.png'), path.join(brainDir, 'grilled-octopus.png'));

  // 5. Greek Salad
  const heroSrc = path.join(brainDir, 'hero_restaurant_1787420744982.jpg');
  await sharp(heroSrc)
    .extract({ left: 360, top: 250, width: 500, height: 500 })
    .resize(800, 800)
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'greek-salad.png'));
  fs.copyFileSync(path.join(publicDir, 'greek-salad.png'), path.join(rootAssetsDir, 'greek-salad.png'));
  fs.copyFileSync(path.join(publicDir, 'greek-salad.png'), path.join(brainDir, 'greek-salad.png'));

  // 6. Galaktoboureko
  await sharp(heroSrc)
    .extract({ left: 860, top: 250, width: 500, height: 500 })
    .resize(800, 800)
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'galaktoboureko.png'));
  fs.copyFileSync(path.join(publicDir, 'galaktoboureko.png'), path.join(rootAssetsDir, 'galaktoboureko.png'));
  fs.copyFileSync(path.join(publicDir, 'galaktoboureko.png'), path.join(brainDir, 'galaktoboureko.png'));

  console.log('All 6 showcased dish images generated successfully!');
}

run().catch(err => {
  console.error('Error generating dish images:', err);
  process.exit(1);
});
