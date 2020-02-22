import next from 'next';
const express = require('express');
// const port =  parseInt(process.env.PORT, 10) || 3000;
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
import { getRequestHandler } from '../config/routes';

export const appServer = (app: any) => {
  const handle = app.getRequestHandler();
  const server = express();
  server.get('/b', (req: any, res: any) => {
    console.warn(111222);
    return app.render(req, res, '/index', req.query);
  });
  server.use(getRequestHandler(app));
  server.all('*', (req: any, res: any) => {
    return handle(req, res);
  });
  return server;
};
const app = next({
  dev,
  dir: 'src/app'
});
app.prepare().then((): void => {
  appServer(app).listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
