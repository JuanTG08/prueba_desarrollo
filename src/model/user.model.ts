import Hook from '../config/utils';

const User = require("./schemas/user.schemas");

class UserModel {
    createNewUser(data) {
        const user = new User(data);
        return user.save()
            .then(resp => {
                return Hook.Message(false, 200, "Se guardo el usuario correctamente");
            }).catch(err => {
                return Hook.Message(true, 500, "Error al intentar generar esta acción");
            });
    }

    listAllUsers() {
        return User.find({})
            .then(resp => {
                if (resp.length > 0) return Hook.Message(false, 200, "Se obtuvieron todas los usuarios", resp);
                return Hook.Message(true, 501, "No se encontro nada.");
            }).catch(err => {
                return Hook.Message(true, 500, "Error al intentar generar esta acción");
            });
    }

    findOneUserByLogin({ email, password }) {
        return User.findOne({ email, password })
            .then(user => {
                if (user) return Hook.Message(false, 200, "Usuario encontrado", user);
                return Hook.Message(true, 501, "No se encontro nada.");
            }).catch(err => {
                return Hook.Message(true, 500, "Error al intentar generar esta acción");
            });
    }

    static findOneById(_id) {
        return User.findById(_id, 'role status') // Solo vamos a pedir el role y el status
            .then(user => {
                if (user) return Hook.Message(false, 200, "Usuario encontrado", user);
                return Hook.Message(true, 501, "No se encontro nada.");
            }).catch(err => {
                return Hook.Message(true, 500, "Error al intentar generar esta acción");
            })
    }
}

export default UserModel;