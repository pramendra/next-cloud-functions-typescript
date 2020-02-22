const express = require('express');
import { getRequestHandler } from './../config/routes';

export const getServer = (app: any) => {
  const server = express();
  const handle = app.getRequestHandler();
  // server.get('/b', (req: any, res: any) => {
  //   return app.render(req, res, '/', req.query);
  // });
  server.use(getRequestHandler(app));

  server.all('*', (req: any, res: any) => {
    return handle(req, res);
  });
  return server;
};
