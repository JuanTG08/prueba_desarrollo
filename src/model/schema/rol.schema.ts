import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    toBack: [
        {
            ref: 'Access-Page',
            type: String,
        }
    ],
    toFront: [
        {
            ref: 'Access-Page',
            type: String
        }
    ],
    status: {
        type: Boolean
    }
}, {
    versionKey: false,
});

const User = mongoose.model('Role', RoleSchema);
export default User;