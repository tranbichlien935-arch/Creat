const fs = require('fs');
const src1 = 'C:/Users/admin/.gemini/antigravity/brain/ae84e6a8-4af4-4b2c-b11f-87184465d506/uploaded_image_0_1781168943850.jpg';
const src2 = 'C:/Users/admin/.gemini/antigravity/brain/ae84e6a8-4af4-4b2c-b11f-87184465d506/uploaded_image_1_1781168943850.jpg';
fs.copyFileSync(src1, 'd:/creatcraft/Creat/public/ipa_h.jpg');
fs.copyFileSync(src2, 'd:/creatcraft/Creat/public/ipa_session.jpg');
console.log('DONE - copied 2 IPA images');
