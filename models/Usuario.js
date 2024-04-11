import conectarBD  from "../configDB/db.js";

//importamos sequalize

import { DataTypes } from "sequelize";

const Usuario = conectarBD.define('usuario', {
    nombre_usuario: 
    { type: DataTypes.STRING,
       allowNull: false
    },

    cedula: 
    { type: DataTypes.INTEGER,
       allowNull: false
    },

    telefono: 
    { type: DataTypes.INTEGER,
       allowNull: false
    },

    direccion: 
    { type: DataTypes.STRING,
       allowNull: false
    },

    edad: 
    { type: DataTypes.INTEGER,
       allowNull: false
    },
})

export default Usuario;