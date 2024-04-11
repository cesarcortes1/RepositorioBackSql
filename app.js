//importamos express
import express  from "express";
//importamos cors
import cors from "cors";
//importamos la conexion a la base de datos
import conectarBD from "./configDB/db.js";
//importamos nuestras rutas
import citasRoutes from './routes/Routes_Citas.js'
import usuarioRoutes from './routes/Routes_Usuario.js'



const app = express();
app.use(express.json());
app.use(cors());
app.use('/citas', citasRoutes);
app.use('/usuario' , usuarioRoutes);



//para comprobar la conexion con la BD de Phpadmyn
try {
    await conectarBD.authenticate();
    console.log('Connexion a la base de datos correcta');
  } catch (error) {
    console.error('Hay un error al conectarse a la dase de datos', error);
  }

// Es la validacion del servidor
app.get('/' , (req,res) => {
    res.send("Hola mundo desarrollador web")
})

app.listen(5000, () =>{
    console.log('El serividor esta corriendo bien en http://localhost:5000/')
});



