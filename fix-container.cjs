const fs = require('fs');
const path = require('path');

function processDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) {
      processDir(fp);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.jsx') || f.endsWith('.js')) {
      let content = fs.readFileSync(fp, 'utf8');
      if (content.includes('container mx-auto px-4')) {
        content = content.replace(/className="container mx-auto px-4 /g, 'className="');
        fs.writeFileSync(fp, content);
        console.log('Updated: ' + fp);
      }
    }
  });
}

processDir('C:/New folder/PANTECH_MARINE/src');
console.log('Done');
