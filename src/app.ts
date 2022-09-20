import express from 'express'
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

// Obtenemos las variables de configuraciones
import env from './config/config';

const app = express(); // Ejecutamos el servidor

// Importamos las rutas
// import indexRoutes from './routes/index';

// Settings
app.set('port', env.PORT_SERVER);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', (req, res) => console.log(req));
app.use('/apo/:id', (req, res) => console.log(req));

// Este folder se usara para el almacenamiento de archivos publicos
// app.use('/uploads', express.static(path.resolve('uploads')));

export default app;