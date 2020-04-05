import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionControler';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// routes.get('/', async (req, res) => {
//     const user = await User.create({
//         name: 'Livany Nunes',
//         email: 'livany@teste.com',
//         password_hash: '12345678921545',
//     });

//     return res.json(user);
// });

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
