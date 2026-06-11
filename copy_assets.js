const fs = require('fs');
const src1 = "C:\\Users\\admin\\.gemini\\antigravity\\brain\\508269ca-226b-48e9-8cb5-7163a9378198\\beer_bottle_1_1780977427446.png";
const dest1 = "d:\\creatcraft\\Creat\\public\\beer1.png";
const src2 = "C:\\Users\\admin\\.gemini\\antigravity\\brain\\508269ca-226b-48e9-8cb5-7163a9378198\\beer_bottle_2_1780977439869.png";
const dest2 = "d:\\creatcraft\\Creat\\public\\beer2.png";

try {
    fs.copyFileSync(src1, dest1);
    console.log("Copied beer1");
    fs.copyFileSync(src2, dest2);
    console.log("Copied beer2");
} catch (e) {
    console.error("Error:", e);
}
