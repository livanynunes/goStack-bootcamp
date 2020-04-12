import { Router } from 'express';
import multer from 'multer';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionControler';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = new multer(multerConfig);

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

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
