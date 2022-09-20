import jwt from 'jsonwebtoken';
import env from '../config/config';
import Hook from '../config/utils';

import UserModel from '../model/user.model';

class tokenAuth {
    static createTokenAuth(payload) { // Creamos el token de autentificación para los usuarios
        return jwt.sign(payload, env.SECRET_SERVER);
    }
    static verifyToken(bearerToken) { // Realizamos las verificaciones validas al token
        if (!bearerToken) return Hook.Message(true, 401, "Unauthorized"); // Debemos realizar el error correspondiente
        const tokenDess = bearerToken.split(" ")[1];
        try {
            const token: any = jwt.verify(tokenDess, env.SECRET_SERVER);
            if (!token.iat) return Hook.Message(true, 810, "Invalid Token");
            if (!this.verifyTimeToken(token.iat)) return Hook.Message(true, 810, "Token Timed Out");
            return Hook.Message(false, 200, "Ok", token);
        } catch (error) {
            return Hook.Message(true, 810, "Invalid Token");
        }
    }

    static verifyTimeToken(iat) { // Verificamos el token por tiempo
        return new Date().getTime() < iat;
    }

    static async isLoggedIn(req, res, next) {
        const { authorization } = req.headers;
        const token: any = tokenAuth.verifyToken(authorization); // Realizamos la verificacion Superficial
        if (token.statusCode != 200 || !token.others._id) return res.json(token); // Si da algun error lo imprimimos
        const user = await UserModel.findOneById(token.others._id); // Buscamos el usuario en cuestion
        if (user.error || user.statusCode != 200) return res.json(user); // Si no existe el usuario en cuestion
        if (!user.others.status) return res.json(Hook.Message(true, 500, "Disabled User")); // Si el usuario esta deshabilitado
        req.user_role = user.others.role;
        req.isLooged = true;
        next();
    }
}