/**
 * ILC Integrator - Docs Portal Local HTTP Server
 * Servidor estático zero-dependency para execução local do Portal de Documentação.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 8080;
const DOCS_DIR = path.resolve(__dirname, '..', 'docs-portal');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  try {
    const rawUrl = (req.url || '/').split('?')[0];
    const decodedPath = decodeURIComponent(rawUrl);
    const safePath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
    let filePath = path.join(DOCS_DIR, safePath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 - Arquivo não encontrado no Docs Portal');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`500 - Erro interno no servidor: ${err.message}`);
  }
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log('==============================================================');
  console.log(' 🚀 ILC Integrator — Portal de Documentação (Docs Hub)');
  console.log('==============================================================');
  console.log(` 📂 Diretório base : ${DOCS_DIR}`);
  console.log(` 🌐 Portal Web     : ${url}`);
  console.log(` 🧪 Export QA PDF  : ${url}/export_central_qa.html`);
  console.log('==============================================================');
  console.log(' Pressione Ctrl+C para encerrar o servidor.');

  if (process.argv.includes('--open')) {
    const startCmd =
      process.platform === 'win32'
        ? `start "" "${url}"`
        : process.platform === 'darwin'
        ? `open "${url}"`
        : `xdg-open "${url}"`;
    exec(startCmd);
  }
});
