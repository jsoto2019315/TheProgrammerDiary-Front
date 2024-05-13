import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/ProgrammersDiary/v1',
    timeout: 10000,
});

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
};