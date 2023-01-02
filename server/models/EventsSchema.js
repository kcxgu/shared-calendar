import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    organisation: {
        type: String,
        required: true,
    },
    event: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    },
})

const EventsModel = new mongoose.model("Event", eventsSchema);

export default EventsModel;