import { api } from './api';


export const addProcedm = async (procedData) =>{
    try {
        const response = await api.post('/procedimentos/cadastro', procedData);
        return response.data;
    } catch (error) {
        if(error.response) {
            return error.response.data
        }
        console.error('Error adding procedimento:', error.code);
        throw error;
    } 
};


