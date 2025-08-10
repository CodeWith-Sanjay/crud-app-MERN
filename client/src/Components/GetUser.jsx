import React, {useEffect, useState} from 'react'
import { getUser, deleteUser } from '../Services/userServices';
import { Link } from 'react-router-dom';

import '../styles/GetUser.css'

const GetUser = ({setSelectedUser, refresh}) => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await getUser();
            setUsers(res.data);
            console.log("Fetched users: ", res.data);
        } catch (error) {
            console.log("Error getting user from frontend: ", error);
        }
    }

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            console.log("User deleted");
            fetchUsers();
        } catch (error) {
            console.log("Error deleting user: ", error);
        }
    }

    const handleUpdateUser = async (user) => {
        try {
            setSelectedUser(user)
        } catch (error) {
            console.log("Error updating user: ", error);
        }
    }

    useEffect (() => {
        fetchUsers()
    }, [refresh])

  return (        
      
    <div className='table-main-container'>
        <Link style={{width: '8%'}} to='/create'>
        <button className='addUser-button' >Add User</button>
        </Link>
      <div className="table-container">
        <table className='table-content'>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Degree</th>
                    <th>Specification</th>
                    <th>Gender</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                        <td>{user.degree}</td>
                        <td>{user.specification}</td>
                        <td>{user.gender}</td>
                        <td>{user.street}</td>
                        <td>{user.city}</td>
                        <td>{user.country}</td>

                        <td>
                            <Link to='/edit/${user._id}'>
                            <button onClick={() => handleUpdateUser(user)} className='table-button-update'>Edit</button>
                            </Link>
                        </td>
                        <td><button onClick={() => handleDeleteUser(user._id)} className='table-button-delete'>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default GetUser
