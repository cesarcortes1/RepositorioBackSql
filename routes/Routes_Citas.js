
//importamos express
import express from 'express';
//importamos nuestro controlador
import {getAllCitas, getCita, agregarCita, modificarCita, eliminarCita} from '../controllers/CitasController.js'

const router = express.Router();

//Rutas de los metodos CRUD
router.get('/' , getAllCitas);
router.get('/:id' , getCita);
router.post('/' , agregarCita);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);

export default router;
