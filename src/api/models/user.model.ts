import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    id: {type: String, requires: true},
    full_name: {type: String, requires: true},
    username: {type: String, requires: true},
    password: {type: String, requires: true, select: false},
});

export default model('UserModel', userSchema);