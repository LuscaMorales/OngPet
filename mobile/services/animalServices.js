import { api, apiFD } from './api';


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
        const formData  = new FormData();
        formData.append("nome", animalData.nome);
        formData.append("raca", animalData.raca);
        formData.append("dataChegada", animalData.dataChegada);
        formData.append("nascimento", animalData.nascimento);
        formData.append("image", animalData.image);
        const response = await apiFD.post('/animals/cadastroAnimal', formData);
        return {
            success: true,
            data: response.data
        };
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