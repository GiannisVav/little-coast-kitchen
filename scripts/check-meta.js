const sharp = require('sharp');
const path = require('path');

const brainDir = 'C:/Users/gvavo/.gemini/antigravity/brain/f2312704-b0a6-4469-933a-29f5815ab2ae';
const heroSrc = path.join(brainDir, 'hero_restaurant_1787420744982.jpg');

sharp(heroSrc).metadata().then(meta => {
  console.log('Hero dimensions:', meta.width, 'x', meta.height);
});
