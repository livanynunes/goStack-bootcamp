import { Router } from 'express';
import UserController from './app/controllers/UserController';
import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/recipients', RecipientsController.store);
routes.put('/recipients', RecipientsController.update);

export default routes;
