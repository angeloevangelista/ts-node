import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();

/**
 * User's routes
 */
routes.get('/users', UserController.index);

routes.post('/users', UserController.create);

export default routes;
