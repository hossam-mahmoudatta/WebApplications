// src/services/api.js
// This file will contain functions to interact with your backend.

import axios from 'axios';

const API_URL = 'http://localhost:5038'; // Change to your backend URL if needed

// Function to fetch users
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/users`);
        return response.data; // return the user data
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // throw error to handle it later
    }
};

// Function to fetch products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/products`);
        return response.data; // return the product data
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // throw error to handle it later
    }
};

// Function to fetch orders
export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/orders`);
        return response.data; // return the order data
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error; // throw error to handle it later
    }
};
