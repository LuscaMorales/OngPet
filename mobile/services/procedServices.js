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

export const addAnimal = async (animalData) =>{
    try {
        const response = await api.post('/cadastroAnimal', animalData);
        return response.data;
    } catch (error) {
        console.error('Error adding animal:', error);
        throw error;
    } 
};


