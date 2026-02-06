import { api } from './api';


export const checkAnimal = async (animalId) => {
    try {
        const response = await api.get(`/animals/checkAnimal/${animalId}`);        
        return response.data.id;
    } catch (error) {
        console.error('Error fetching animal data:', error);
        return null
    }
};

export const addAnimal = async (animalData) =>{
    try {
        const response = await api.post('/animals/cadastroAnimal', animalData);
        return response.data.data;
    } catch (error) {
        console.error('Error adding animal:', error);
        throw error;
    } 
};

export const getCompleteAnimal = async (animalId) => {
    try {
        const response = await api.get(`/animals/animalCompleto/${animalId}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching complete animal data:', error);
        throw error;
    }  
};