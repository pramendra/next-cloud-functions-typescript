const next = require('next');
import { getServer } from './../server/server';
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({
  dev,
  dir: 'src/app'
});

const server = getServer(app);
app.prepare().then(() => {
  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
