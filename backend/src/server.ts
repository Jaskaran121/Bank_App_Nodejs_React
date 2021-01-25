import express from "express";
import routes from './startup/routes';
import setCors from './startup/cors';

const app = express();

routes(app);
setCors(app);

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
    console.log(`Starting server on Port ${port}.....`));

export default server;