// importamos el modelo

import Usuario from '../models/Usuario.js';

//metodo o funciones CRUD

// funcion o metodo mostrar todas los usuarios

export const getAllUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);

    } catch (error) {
        res.json({msg: error.message})
    }
}

export const getUsuario = async(req , res) => {
    try {
        const usuarioid = await Usuario.findAll({
            where:{id:req.params.id}
        });
        res.json(usuarioid[0]);
        
    } catch (error) {
        res.json({msg: error.message})
    }

}

export const agregarUsuario = async (req , res) =>{
    try {
        await Usuario.create(req.body);
        res.json({msg: 'se agrego un usuario nuevo'})
    } catch (error) {
        res.json({msg: error.message})
    }
}

export const modificarUsuario = async (req, res) =>{
    try {
        await Usuario.update(req.body, {
            where:{id: req.parms.id}
        })
        res.json({msg:"se modifico un usuario"})
        
    } catch (error) {
        res.json({msg: error.message})
    }
}

export const eliminarUsuario = async (req , res) =>{
    try {
        await Usuario.destroy({
            where:{id:req.params.id}
        })
        res.json({msg:"Se elimino un usuario"})
        
    } catch (error) {
        res.json({msg: error.message})
    }    
}