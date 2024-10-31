// src/components/Users.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api.js';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const usersData = await fetchUsers();
                setUsers(usersData); // Set the users in state
            } catch (error) {
                console.error('Failed to fetch users', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        getUsers(); // Call the function
    }, []);

    if (loading) return <div>Loading...</div>; // Show loading message

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name}</li> // Display user name
                ))}
            </ul>
        </div>
    );
};

export default Users;
