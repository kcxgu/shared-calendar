import express from 'express';
import UserModel from '../models/UserSchema.js';

export const logInRouter = express.Router();

logInRouter.route('/')
    .post((req, res) => {
        const { organisation, password } = req.body;
        UserModel.findOne({ organisation }, (err, user) => {
            if (user && password === user.password) {
                return res.send({ message: "Success!", user })
            }
            else {
                return res.send({ message: "Uh oh, incorrect password" })
            }
        });
    });