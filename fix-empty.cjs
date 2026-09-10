const fs = require('fs');
const path = require('path');

function processDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) {
      processDir(fp);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      let content = fs.readFileSync(fp, 'utf8');
      if (content.includes('className=""')) {
        // Remove <div className="">\n
        content = content.replace(/<div className="">\n/g, '');
        // Remove the last </div>\n before </section> — but only one
        content = content.replace(/<\/div>\n(\s*<\/section>)/g, '$1');
        fs.writeFileSync(fp, content);
        console.log('Fixed: ' + fp);
      } else {
        console.log('OK: ' + fp);
      }
    }
  });
}

processDir('C:/New folder/PANTECH_MARINE/src');
console.log('Done');
