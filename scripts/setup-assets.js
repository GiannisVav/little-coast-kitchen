const fs = require('fs');

const srcHero = 'C:/Users/gvavo/.gemini/antigravity/brain/f2312704-b0a6-4469-933a-29f5815ab2ae/hero_restaurant_1787420744982.jpg';
const srcLogo = 'C:/Users/gvavo/.gemini/antigravity/brain/f2312704-b0a6-4469-933a-29f5815ab2ae/logo_light_1787420847326.jpg';

const dirs = [
  'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/public/assets',
  'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/public/assets/logos',
  'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/assets',
  'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/assets/logos',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy hero image
fs.copyFileSync(srcHero, 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/public/assets/hero.png');
fs.copyFileSync(srcHero, 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/assets/hero.png');

// Copy logo image as PNG
fs.copyFileSync(srcLogo, 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/public/assets/logos/logo-light.png');
fs.copyFileSync(srcLogo, 'C:/Users/gvavo/.gemini/antigravity/scratch/little-coast/assets/logos/logo-light.png');

console.log('All assets (hero and logo) successfully placed!');
