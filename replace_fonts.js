const fs = require('fs');
const path = require('path');

function replaceInLine(content) {
    let newContent = content;
    newContent = newContent.replace(/'Lato',\s*sans-serif/g, "'Montserrat', sans-serif");
    newContent = newContent.replace(/'Josefin\s*Sans',\s*sans-serif/gi, "'Montserrat', sans-serif");
    newContent = newContent.replace(/'Fira\s*Sans',\s*sans-serif/gi, "'Montserrat', sans-serif");
    newContent = newContent.replace(/'Quicksand',\s*sans-serif/gi, "'Montserrat', sans-serif");
    newContent = newContent.replace(/'Outfit',\s*sans-serif/gi, "'Montserrat', sans-serif");
    return newContent;
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else {
            if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
                const content = fs.readFileSync(fullPath, 'utf8');
                const replaced = replaceInLine(content);
                if (content !== replaced) {
                    fs.writeFileSync(fullPath, replaced, 'utf8');
                    console.log(`Updated fonts in ${fullPath}`);
                }
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src'));
console.log("Done updating font families.");
