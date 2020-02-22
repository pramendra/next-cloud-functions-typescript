const next = require('next');
import { getServer } from './../server/server';
const functions = require('firebase-functions');
const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev,
  conf: { distDir: `dist/next` },
  publicRuntimeConfig: {
    staticFolder: '/public/'
  }
});
const server = getServer(app);
exports.next = functions.https.onRequest((req: any, res: any) => {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested
  // server.use((req, res) => handle(req, res));
  return app.prepare().then(() => {
    server(req, res);
  });
});
