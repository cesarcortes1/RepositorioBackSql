//importamos express

import express from 'express';

//importamos nuestro controlador

import { agregarUsuario, eliminarUsuario, getAllUsuario, getUsuario, modificarUsuario } from '../controllers/UsuarioController.js';

const router = express.Router();

//Rutas de los metodos CRUD

router.get('/' , getAllUsuario );
router.get('/:id' , getUsuario );
router.post('/' , agregarUsuario);
router.put('/:id' , modificarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;
