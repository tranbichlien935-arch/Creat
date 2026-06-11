const fs = require('fs');
fs.mkdirSync('d:/creatcraft/Creat/public', { recursive: true });
fs.copyFileSync('C:/Users/admin/.gemini/antigravity/brain/c1fa8816-2066-44fe-98e9-d0c92625e0af/uploaded_image_1780664094569.png', 'd:/creatcraft/Creat/public/logo.png');
console.log('Done!');
