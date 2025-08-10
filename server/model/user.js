import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    contact: Number,
    degree: String,
    specification: String,
    gender: String,
    street: String,
    city: String,
    country: String
});

export const User = mongoose.model('User', userSchema);