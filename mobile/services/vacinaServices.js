import { api } from './api';

export const cadastroVac = async (vacinaData) => {
    try {
        const response = await api.post('/vacinas/cadastro', vacinaData);
        return response.data;
    } catch (error) {
        console.error('Error adding vacina:', error);
        throw error;
    }
};