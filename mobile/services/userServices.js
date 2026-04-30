import { api } from './api';

export const login = async (cpf, password) => {
    try {
        const response = await api.post('/users/login', { cpf, password });
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            error: error.response.data
        };
    }
}

export const cadastro = async (userData) => {
    try {
        const response = await api.post('/users/register', {userData});
        console.log(response);
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            error: error.response.data
        }
    }
}

export const update = async (id, userData) => {
    try {
        const response = await api.put(`/users/update/${id}`, userData);
        console.log(response);
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            error: error.response.data
        }
    }
}

export const getAll = async () => {
    try {
        const response = await api.get('/users/getAll');
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            error: error.response.data
        };
    }
}

export const delUser = async (id) => {
    try {
        const response = await api.delete(`/users/delete/${id}`);
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            error: error.response.data
        };
    }
}

