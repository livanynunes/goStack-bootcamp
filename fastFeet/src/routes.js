import { Router } from 'express';
import UserController from './app/controllers/UserController';
import RecipientsController from './app/controllers/RecipientsController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/recipients', RecipientsController.store);
routes.put('/recipients', RecipientsController.update);

export default routes;
