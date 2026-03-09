import { api } from './api';

export const login = async (cpf, password) => {
    try {
        const response = await api.post('/users/login', { cpf, password });
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

export const cadastro = async (userData) => {
    try {
        const response = await api.post('/users/register', {userData});
        console.log(response);
        return {
            sucess: true,
            data: response.data
        };
    } catch (error) {
        return {
            sucess: false,
            error: error.response.data
        }
    }
}
