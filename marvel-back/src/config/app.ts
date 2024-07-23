import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MarvelRoutes } from '../modules/marvel/routes';
import { UserRoutes } from '../modules/user/routes';
dotenv.config();

const app: Application = express();

app.use(express.json());

app.enable('trust proxy');
app.use(cors());

app.use('/api/marvel',MarvelRoutes)
app.use('/api/user', UserRoutes)

export default app;