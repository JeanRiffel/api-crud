import express from "express";
const server = express();

import { router  } from './router/route';

server.use(router);

server.listen( 3000 , ()=> { console.log( `Server is running on Port 3000`);});
