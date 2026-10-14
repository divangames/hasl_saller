const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = fs.realpathSync(path.resolve(__dirname, '..'));
const identity = crypto.createHash('sha256').update(root.toLowerCase()).digest('hex');
const port = Number(process.argv[2] || 4317);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ttf': 'font/ttf' };

http.createServer((request, response) => {
  response.setHeader('Cache-Control', 'no-store');
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { response.writeHead(400).end(); return; }
  if (pathname === '/__hasl_project') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ project: 'hasl_saller', identity }));
    return;
  }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  const relative = path.relative(root, file);
  if (relative.startsWith('..') || path.isAbsolute(relative) || relative.split(path.sep).some(part => part.startsWith('.'))) {
    response.writeHead(403).end(); return;
  }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) { response.writeHead(404).end('Not found'); return; }
    response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(response);
  });
}).listen(port, '127.0.0.1', () => console.log(`HASL http://127.0.0.1:${port}/#home`));
