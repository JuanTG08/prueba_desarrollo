// Requerimos Moongose
const mongoose = require('mongoose');

// Requerimos la dirección del servidor de MongoDB
const { MONGODB_URI } = require('./config');

/*
module.exports = async () => {
    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB is connected to ${db.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}
*/

const Mongo = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
            .then(connection => {
                this.connection = connection;
                console.log('Conexion a MongoDB');
            })
            .catch(error => console.error(error));
    }
}

export default Mongo;