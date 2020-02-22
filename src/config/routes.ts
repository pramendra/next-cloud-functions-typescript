const NextRoutes = require('next-routes');

const routes = new NextRoutes()
  .add('index', '/', 'index')
  .add('index-test', '/index-test', 'index'); //for test, same use same page ie index

export const { Link } = routes;
export const getRequestHandler = routes.getRequestHandler.bind(routes);
