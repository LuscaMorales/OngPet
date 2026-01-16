import { api } from './api';


export const getAnimal = async (animalId) => {
    try {
        const response = await api.post('/ConsultaAnimal', { IDAnimal: animalId });
        return response.data;
    } catch (error) {
        console.error('Error fetching animal data:', error);
        throw error;
    }
};

export const addProcedm = async (procedData) =>{
    try {
        const response = await api.post('/cadastroProced', procedData);
        return response.data;
    } catch (error) {
        console.error('Error adding procedimento:', error);
        throw error;
    } 
};


