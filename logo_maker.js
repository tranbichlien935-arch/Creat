import fs from 'fs';
fs.mkdirSync('public', { recursive: true });
const p = 'C:/Users/admin/.gemini/antigravity/brain/c1fa8816-2066-44fe-98e9-d0c92625e0af/uploaded_image_1780664094569.png';
fs.copyFileSync(p, 'public/logo.png');
console.log('Success copying logo!');
