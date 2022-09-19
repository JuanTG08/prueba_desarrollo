import jwt from 'jsonwebtoken';
import env from '../config/config';
import Hook from '../config/utils';

class tokenAuth {
    static createTokenAuth(payload) { // Creamos el token de autentificación para los usuarios
        return jwt.sign(payload, env.SECRET_SERVER);
    }
}