const fs = require('fs');

const src = 'C:/Users/admin/.gemini/antigravity/brain/508269ca-226b-48e9-8cb5-7163a9378198/uploaded_image_1780998746286.jpg';
const dest = 'd:/creatcraft/Creat/public/page-banner.jpg';

try {
    const data = fs.readFileSync(src);
    fs.writeFileSync(dest, data);
    console.log('Successfully copied manually');
} catch (err) {
    fs.writeFileSync('d:\\creatcraft\\Creat\\err.log', err.toString());
}
