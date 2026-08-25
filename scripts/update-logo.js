const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/gvavo/.gemini/antigravity/brain/f2312704-b0a6-4469-933a-29f5815ab2ae';
const userLogo = path.join(brainDir, '.user_uploaded/media_1787423264283.png');
const publicLogoDir = 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/public/assets/logos';
const rootLogoDir = 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/assets/logos';

async function updateLogos() {
  const meta = await sharp(userLogo).metadata();
  console.log('User Logo Metadata:', meta.width, 'x', meta.height, 'format:', meta.format, 'channels:', meta.channels, 'hasAlpha:', meta.hasAlpha);

  // Trim transparent edges so the logo is tight and scales perfectly
  const trimmedBuffer = await sharp(userLogo)
    .trim()
    .png({ quality: 100 })
    .toBuffer();

  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log('Trimmed Logo Metadata:', trimmedMeta.width, 'x', trimmedMeta.height);

  // Write trimmed PNG to public and root assets
  fs.writeFileSync(path.join(publicLogoDir, 'logo-light.png'), trimmedBuffer);
  fs.writeFileSync(path.join(rootLogoDir, 'logo-light.png'), trimmedBuffer);
  fs.writeFileSync(path.join(brainDir, 'logo-light.png'), trimmedBuffer);

  // Also create a version optimized for dark and light backgrounds if needed
  console.log('Logo successfully updated with user transparent version!');
}

updateLogos().catch(err => {
  console.error('Error updating logo:', err);
  process.exit(1);
});
