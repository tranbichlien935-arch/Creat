const fs = require('fs');
fs.mkdirSync('D:\\creatcraft\\Creat\\public\\images\\products', { recursive: true });

const b = 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\2143cfff-d270-4221-aa34-b36c0b547992';
try {
    fs.copyFileSync(`${b}\\uploaded_image_0_1781236216952.png`, 'D:\\creatcraft\\Creat\\public\\images\\products\\signature_new.jpg');
    fs.copyFileSync(`${b}\\uploaded_image_1_1781236216952.png`, 'D:\\creatcraft\\Creat\\public\\images\\products\\bestseller_new.png');
    fs.copyFileSync(`${b}\\uploaded_image_0_1781236216952.png`, 'D:\\creatcraft\\Creat\\public\\images\\products\\stout_new.png');
    console.log("Success!");
} catch (e) {
    console.log("Error:", e);
}
