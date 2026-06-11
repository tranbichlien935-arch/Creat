const fs = require('fs');
try {
    let list = fs.readdirSync('C:/Users/admin/.gemini/antigravity/brain/508269ca-226b-48e9-8cb5-7163a9378198');
    fs.writeFileSync('d:/creatcraft/Creat/debug.txt', list.join('\n'));
} catch (e) {
    fs.writeFileSync('d:/creatcraft/Creat/debug.txt', e.toString());
}
