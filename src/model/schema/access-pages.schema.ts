import mongoose from "mongoose";

const AccessPageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    path: {
        type: String,
        unique: true
    },
    from: {
        type: String,
        enum: ['front', 'back']
    },
    status: {
        type: Boolean
    }
}, {
    versionKey: false,
});

const User = mongoose.model('Access-Page', AccessPageSchema);
export default User;