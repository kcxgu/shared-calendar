import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { logInRouter } from './routes/login.js';
import { submitRouter } from './routes/submit.js';

const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
mongoose.set('strictQuery', true);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/login', logInRouter);
app.use('/submit', submitRouter);

const port = process.env.PORT;
const host = process.env.HOST;

const main = async () => {
    console.log(`Connecting to database at: ${process.env.DB_URI}`);
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log(`Database connected at: ${process.env.DB_URI}`);
    } catch (e) {
        console.log(`Database error: ${e.message}`);
    }
}

main();


const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;