import express from 'express';
import { UserController } from './controller/user.controller';

export const UserRoutes = express.Router();


UserRoutes.use(UserController)