import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { connectDB } from './config/db.js'

const app = express();
dotenv.config();
const port = process.env.PORT

app.use(express.json())
app.use(cors());

app.use('/api/', userRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on localhost://${port}`);
    })
}).catch((err) => {
    console.log("Error connecting express: ", err);
})