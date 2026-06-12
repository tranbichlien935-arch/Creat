const fs = require('fs');
try {
    fs.mkdirSync('D:\\creatcraft\\Creat\\public\\images\\products', { recursive: true });
    fs.copyFileSync('C:\\Users\\admin\\.gemini\\antigravity\\brain\\2143cfff-d270-4221-aa34-b36c0b547992\\uploaded_image_0_1781236216952.png', 'D:\\creatcraft\\Creat\\public\\images\\products\\signature_new.jpg');
    fs.copyFileSync('C:\\Users\\admin\\.gemini\\antigravity\\brain\\2143cfff-d270-4221-aa34-b36c0b547992\\uploaded_image_1_1781236216952.png', 'D:\\creatcraft\\Creat\\public\\images\\products\\bestseller_new.png');
    fs.copyFileSync('C:\\Users\\admin\\.gemini\\antigravity\\brain\\2143cfff-d270-4221-aa34-b36c0b547992\\uploaded_image_0_1781236216952.png', 'D:\\creatcraft\\Creat\\public\\images\\products\\stout_new.png');
    fs.writeFileSync('D:\\creatcraft\\Creat\\success.txt', 'Done');
} catch (e) {
    fs.writeFileSync('D:\\creatcraft\\Creat\\error.txt', e.toString());
}
