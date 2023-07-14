import express from 'express';
import 'dotenv/config';
import './shared/services/TranslationsYup';
import { router } from './routes';

const server = express();

server.use(router);
server.use(express.json());

export { server };