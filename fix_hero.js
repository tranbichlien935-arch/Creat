const fs = require('fs');
let c = fs.readFileSync('src/app/components/HeroSlider.tsx', 'utf-8');
const searchString = '  import { useEffect, useRef, useState } from "react";';
const i = c.indexOf(searchString);
if (i > 0) {
    // We found the nested import. The valid component ended right before this line.
    // Wait, the original `HeroSlider.tsx` should only have one export function.
    // Let's just find the first "import { useEffect" and read down to the end of the real component, OR cut off anything after the duplicated "import { ".
    const actualEnd = c.lastIndexOf('</section>', i);
    if (actualEnd > 0) {
        c = c.substring(0, actualEnd + 10) + '\n  );\n}\n';
        fs.writeFileSync('src/app/components/HeroSlider.tsx', c, 'utf-8');
        console.log("Truncated at ", actualEnd);
    } else {
        // If we can't find </section>, just cut at `i` and append `  );\n}\n`
        // Actually, looking at the snippet, the first component didn't close its `export function HeroSlider()` block!
        const closedFirst = c.substring(0, i) + '  );\n}\n';
        fs.writeFileSync('src/app/components/HeroSlider.tsx', closedFirst, 'utf-8');
    }
}
