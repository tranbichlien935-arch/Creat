const fs = require('fs');
let c = fs.readFileSync('src/app/components/Products.tsx', 'utf-8');

// Replace Signature Image
c = c.replace('https://www.creatcraft.com.vn/thumbs/600x800x2/upload/product/untitled-session89811-8635.jpg', '/images/products/signature_new.jpg');

// Replace Best Seller Image
c = c.replace('https://www.creatcraft.com.vn/thumbs/600x800x2/upload/product/dsc02050-1-1-4865.jpg', '/images/products/bestseller_new.png');

// Replace Stout Image
c = c.replace('https://www.creatcraft.com.vn/upload/product/4740733791221858832401271865121894443145389519n-3438.jpg', '/images/products/stout_new.png');

// Remove white card padding
c = c.replace('padding: "18px 20px 20px"', 'padding: "20px 0 0"');

// Fix mix-blend-multiply
c = c.replace(/className="primary-image mix-blend-multiply"/g, 'className="primary-image"');
c = c.replace(/className="secondary-image mix-blend-multiply"/g, 'className="secondary-image"');

fs.writeFileSync('src/app/components/Products.tsx', c);
console.log('Done!');
