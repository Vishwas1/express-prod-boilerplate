import Store from "./services/store";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../', process.env.NODE_ENV + '.env')
});

const { HOST, PORT, NODE_ENV } = process.env;
const db = new Store();
const baseUrl = 'http://' + HOST + ':' + PORT;

export {
  db,
  NODE_ENV,
  HOST,
  PORT,
  baseUrl
};
