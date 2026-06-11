const fs = require('fs');
let c = fs.readFileSync('src/app/components/HeroSlider.tsx', 'utf-8');
const i = c.lastIndexOf('import { useEffect');
if (i > 0) {
    c = c.substring(0, i);
    fs.writeFileSync('src/app/components/HeroSlider.tsx', c, 'utf-8');
}
