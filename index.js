import  express  from "express";
import db from "./config/database.js";
import pesertaRouter from './routes/index.js';
// import bodyParser from "body-parser";
import cors from 'cors';

const app = express();

try {
    await db.authenticate();
    console.log('Database connected');
} catch (error) {
    console.error('connection error : ', error)
}

app.use(cors());
app.use(express.json());
app.use('/peserta', pesertaRouter);



app.listen(5000, () => console.log('server runing'))