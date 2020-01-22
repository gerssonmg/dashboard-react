import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.devup.com.br/php/api-dashboard/api',
})

export default api;