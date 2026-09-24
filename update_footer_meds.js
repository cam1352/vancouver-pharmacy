const fs = require('fs');
const path = require('path');
const repos = ['vancouver-pharmacy', 'calgary-pharmacy', 'toronto-pharmacy'];

for (const repo of repos) {
  const footerPath = path.join(__dirname, '..', repo, 'src', 'components', 'Footer.tsx');
  let content = fs.readFileSync(footerPath, 'utf8');
  if (!content.includes('<li><Link href="/medications"')) {
    content = content.replace('<li><Link href="/blog" className="hover:text-blue-400 transition">Pharmacy News</Link></li>', '<li><Link href="/blog" className="hover:text-blue-400 transition">Pharmacy News</Link></li>\n              <li><Link href="/medications" className="hover:text-blue-400 transition font-bold text-emerald-400">Medications A-Z</Link></li>');
    fs.writeFileSync(footerPath, content, 'utf8');
  }
}
