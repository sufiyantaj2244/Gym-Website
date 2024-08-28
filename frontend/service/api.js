import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/add', userData);
        return response.data;
    } catch (error) {
        console.error('There was an error!', error);
        throw error;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/login', userData);
        return response.data;
    } catch (error) {
        console.error('There was an error!', error);
        throw error;
    }
};