const fs = require('fs');
try {
    fs.mkdirSync('D:/creatcraft/Creat/public/images/products', { recursive: true });
    console.log("Directory created successfully");

    fs.copyFileSync('C:/Users/admin/Downloads/h.jpg', 'D:/creatcraft/Creat/public/images/products/signature_new.jpg');
    console.log("Copy 1 OK");

    // Fallback if the other images are missing, don't crash
    try {
        fs.copyFileSync('C:/Users/admin/.gemini/antigravity/brain/586a564b-ef6d-4fb4-b8d2-0ce71b3365b3/uploaded_image_1_1781165439220.png', 'D:/creatcraft/Creat/public/images/products/bestseller_new.png');
        console.log("Copy 2 OK");
    } catch (e) { console.log("Copy 2 failed", e.message); }

    try {
        fs.copyFileSync('C:/Users/admin/.gemini/antigravity/brain/586a564b-ef6d-4fb4-b8d2-0ce71b3365b3/uploaded_image_2_1781165439220.png', 'D:/creatcraft/Creat/public/images/products/stout_new.png');
        console.log("Copy 3 OK");
    } catch (e) { console.log("Copy 3 failed", e.message); }

    fs.writeFileSync('D:/creatcraft/Creat/logs.txt', "SUCCESS");
} catch (e) {
    fs.writeFileSync('D:/creatcraft/Creat/logs.txt', e.stack);
}
