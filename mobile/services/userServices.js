import { api } from './api';

export const loginUser = async (username, password) => {
    try {
        const response = await api.post('/users/login', { username, password });
        return {
            sucess: true,
            data: response.data
        };
    } catch (error) {
        return {
            sucess: false,
            error: error.response.data.error
        };
    }
}
