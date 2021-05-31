import { Request, Response } from 'express';
import { Error } from 'mongoose';

import UserModel from '../models/user.model';
import { IUser } from '../../services/interfaces/user.interface';
import { Encription } from '../../services/modules/encription';

export class UserController{
    static get = (req: Request, res: Response) => {
        UserModel.find({}, (err, users) => {
            if(err) return res.status(500).send();
            res.status(200).send({data: users});
        });
    }

    static post = (req: Request, res: Response) => {
        let body: IUser = req.body;
        UserModel.findOne({username: body.username}, (err: Error, user: IUser) => {
            if(err) return res.status(500).send();
            if(user != null) return res.status(200).send({msg: 'exists'});
            body.password = Encription.encript_password(body.password);
            const newUser = new UserModel(body);
            newUser.save((err: Error) => {
                if(err) return res.status(500).send();
                res.status(200).send({msg: 'created'});
            }); 
        });
    }

    static put = (req: Request, res: Response) => {
        let body: IUser = req.body;
        const id = body.id;
        delete body.id;
        body.password = Encription.encript_password(body.password);
        UserModel.findByIdAndUpdate(id, body, (err: Error) => {
            if(err) return res.status(500).send();
            res.status(200).send({msg: 'updated'})
        });
    };

    static delete = (req: Request, res: Response) => {
        UserModel.findByIdAndDelete(req.query.id, null, (err: Error) => {
            if(err) return res.status(500).send();
            res.status(200).send({msg: 'deleted'})
        });
    };
}