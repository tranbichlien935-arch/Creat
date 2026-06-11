const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'data', 'newsData.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const injection = `
                {/* Journey Banner Injected */}
                <img src="/journey-banner.png" alt="Quy trình trải nghiệm Creat Craft" className="w-full mt-12 mb-4 rounded-sm shadow-xl border border-[#C8963E]/20" />
            </>`;

content = content.replace(/<\/>/g, injection);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Banner inserted successfully via fragment replacement.");
