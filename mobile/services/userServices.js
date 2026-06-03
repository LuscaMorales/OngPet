import { api, apiFD } from './api';


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
        const formData  = new FormData();
        formData.append("fullName", userData.fullName);
        formData.append("cpf", userData.cpf);
        formData.append("email", userData.email);
        formData.append("phone", userData.phone);
        formData.append("role", userData.role); 
        formData.append("password", userData.password);
        formData.append("birth_date", userData.birth_date);

        formData.append("avatar", {
            uri: userData.uri,
            name: userData.name,
            type: userData.type,
        });
        const fomeData = formData.get('avatar');
        console.log(fomeData.uri);
        const response = await apiFD.post('/users/register',formData);
        console.log("VAITOMNO CUCARAI", response);
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

