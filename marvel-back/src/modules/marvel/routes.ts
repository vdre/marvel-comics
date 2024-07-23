import express from 'express';
import { MarvelController } from './controller/marvel.controller';


export const MarvelRoutes = express.Router();


MarvelRoutes.use(MarvelController);