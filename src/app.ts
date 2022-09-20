import express from 'express'
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

// Obtenemos las variables de configuraciones
import env from './config/config';
// Obtenemos la conexion a la base de datos
import Mongo from './config/database';

// Nos conectamos a la base de datos
new Mongo().connect();

const app = express(); // Ejecutamos el servidor

// Importamos las rutas
// import indexRoutes from './routes/index';

// Settings
app.set('port', env.PORT_SERVER);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

/*
*
*   Rutas
*
*/
// Importamos las rutas ***
import accessPage from './routes/access-page.routes';
import rol from './routes/rol.routes';

// Establecemos las rutas ***
app.use('/api/access-page', accessPage); // Ruta relacionada a la autorizacion de los usuarios
app.use('/api/rol', rol); // Ruta relacionada a la autorizacion de los usuarios

// Este folder se usara para el almacenamiento de archivos publicos
// app.use('/uploads', express.static(path.resolve('uploads')));

export default app;