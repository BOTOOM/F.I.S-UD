import * as bodyParser from "body-parser";
import * as express from "express";
import { Servidor } from "./app/src/Servidor";

const server = new Servidor();
const app = express();
app.use(bodyParser.json());
app.use(server.getRutas());
app.listen(3000);
