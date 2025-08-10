import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoURL);
        console.log('MongoDB Database Connected');
    } catch (error) {
        console.error('Database connection failed: ', error);
        process.exit(1);
    }
}

connectDB()