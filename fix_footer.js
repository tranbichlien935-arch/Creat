const fs = require('fs');
let c = fs.readFileSync('src/app/components/Footer.tsx', 'utf-8');
c = c.replace('className="h-14 w-auto object-contain brightness-0 opacity-80"', 'className="h-[100px] w-auto object-contain brightness-0 opacity-80"');

const bottomString = `        </div>
      </div>
    </footer>
  );
}`;

const replaceBottom = `        </div>
      </div>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-12 h-12 bg-[#C8963E] text-white border-none rounded-full hidden md:flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#b0802e] hover:-translate-y-1 transition-all duration-300 z-[90] group"><div className="w-3 h-3 border-t-[2px] border-l-[2px] border-current transform rotate-45 mt-1" /></button>
    </footer>
  );
}`;

c = c.replace(bottomString, replaceBottom);
fs.writeFileSync('src/app/components/Footer.tsx', c, 'utf-8');
