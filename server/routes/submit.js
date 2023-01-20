import express from 'express';
import EventsModel from '../models/EventsSchema.js';
import { check, validationResult } from 'express-validator';

export const submitRouter = express.Router();

submitRouter.route('/')
    .post(
        [
            check("date").not().isEmpty(),
            check("start").not().isEmpty(),
            check("end").not().isEmpty(),
            check("organisation").not().isEmpty(),
            check("event").not().isEmpty(),
            check("location").not().isEmpty(),
            check("description").not().isEmpty(),
            check("link").not().isEmpty()
        ],
        async (req, res) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.send({ message: "Check all fields are complete before submission" })
            } else {
                const newEvent = new EventsModel(req.body);
                // const event = await newEvent.save();
                newEvent.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: "Success!", newEvent });
                    }
                });
            }
            // try {
            //     res.status(201).json(event, { message: `Success!` });
            // } catch (e) {
            //     res.status(422).json({ message: `Check all fields are complete before submission` })
            // }
        })