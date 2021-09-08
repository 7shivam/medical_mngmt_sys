import axios from 'axios';

const Medical_API_BASE_URL = "http://localhost:8080/api/v1/Medicals";

class MedicalService {

    getMedicals(){
        return axios.get(Medical_API_BASE_URL);
    }

    createMedical(Medical){
        return axios.post(Medical_API_BASE_URL, Medical);
    }

    getMedicalById(MedicalId){
        return axios.get(Medical_API_BASE_URL + '/' + MedicalId);
    }

    updateMedical(Medical, MedicalId){
        return axios.put(Medical_API_BASE_URL + '/' + MedicalId, Medical);
    }

    deleteMedical(MedicalId){
        return axios.delete(Medical_API_BASE_URL + '/' + MedicalId);
    }
}

export default new MedicalService()