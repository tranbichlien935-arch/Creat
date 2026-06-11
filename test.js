const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'data', 'newsData.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const injection = `
                {/* Journey Banner Injected */}
                <img src="/journey-banner.png" alt="Quy trình trải nghiệm Creat Craft" className="w-full mt-12 mb-4 rounded-sm shadow-xl border border-[#C8963E]/20" />
            </>`;

const result = content.split('</>').join(injection);

fs.writeFileSync(filePath, result, 'utf8');
console.log("Replaced </> successfully.");
