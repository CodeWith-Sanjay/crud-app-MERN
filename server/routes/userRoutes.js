import express from 'express'
import { getUser, createUser, updateUser, deleteUser } from "../controller/userController.js";

const route = express.Router();

route.get('/user', getUser);
route.post('/user', createUser);
route.put('/user/:id', updateUser)
route.delete("/user/:id", deleteUser);

export default route