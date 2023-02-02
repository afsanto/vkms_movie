import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const str1 = '&language=pt-BR';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})+str1
});


axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;