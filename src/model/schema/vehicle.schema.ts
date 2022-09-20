import mongoose, { Schema } from "mongoose";

const VehicleSchema = new mongoose.Schema({
    propietario: {
        ref: 'User',
        type: Schema.Types.ObjectId,
    },
    placa: {
        type: String,
        required: true,
    },
    fecha_tarjeta_op: {
        type: Date,
        required: true,
    },
    fecha_soat: {
        type: Date,
        required: true,
    },
    cilindraje: {
        type: Number, // Cilindraje
        required: true,
    },
    capacidad: {
        type: Number, // Libras
        required: true,
    },
    travel_status: {
        type: Boolean,
        default: false,
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

const User = mongoose.model('User', VehicleSchema);
export default User;