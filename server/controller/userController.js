import { User } from "../model/user.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        console.log('Error getting user: ', error);
        res.status(500).json({message: 'Error getting User'});
    }
}

export const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const user = new User(newUser);
        await user.save();
        res.status(200).json({message: 'User Created successfully', data: user});
    } catch (error) {
        console.log("Error creating user: ", error);
        res.status(500).json({message: 'Error creating User'});
    }
}

export const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const newData = req.body;
        const user = await User.findByIdAndUpdate(id, newData, {new: true});

        if(!user) {
            res.status(404).json({message: 'User not found'})
        }

        res.status(200).json({message: 'User Updated Successfully', data: user});
    } catch (error) {
        console.log("Error Updating user: ", error);
        res.status(500).json({message: "error updating user"});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id)

        if(!deletedUser) {
            res.status(404).json({message: 'User not found'})
        }

        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        console.log("Error deleting user: ", error);
        res.status(500).json({message: "Error deleting user"});
    }
}