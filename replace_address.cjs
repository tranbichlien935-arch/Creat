const fs = require('fs');
const path = require('path');

const targetPath = path.join('d:\\creatcraft\\Creat\\src\\app\\data\\newsData.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

// I am adding the new address alongside the old address
// Previously I replaced:
// content = content.replace(regex1, '545 Nguyễn Xiển, Long Bình');
// content = content.replace(regex2, '545 Nguyễn Xiển, Long Bình, Hồ Chí Minh');
// content = content.replace(regex3, '545 Nguyễn Xiển, Long Bình, Hồ Chí Minh');
// And we already ran that script, so newsData.tsx CURRENTLY contains "545 Nguyễn Xiển, Long Bình..." where it used to contain "93 Đường số 11...".
// Actually, I ran `git restore` on newsData.tsx, so it is back to "93 Đường số 11".

const regex1 = /93 Đường số 11, Phường Tây Thạnh/g;
const regex2 = /93 Đường số 11, P\. Tây Thạnh, Thành Phố Hồ Chí Minh/g;

content = content.replace(regex1, '93 Đường số 11, Phường Tây Thạnh và 545 Nguyễn Xiển, Long Bình');
content = content.replace(regex2, '93 Đường số 11, P. Tây Thạnh (CN1) và 545 Nguyễn Xiển, Long Bình (CN2), Thành Phố Hồ Chí Minh');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Update newsData.tsx complete.');
