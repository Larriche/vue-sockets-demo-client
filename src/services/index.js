import { store } from '../store';
import { router } from '../router';
import Config from '../../config/app';

export const axios = Axios.create({
    baseURL: Config.baseURL,

    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    }
});

// Intercept each request and set the bearer token for user
/**
axios.interceptors.request.use((config) => {
    let apiToken = store.getters['Auth/getUser'].api_token;

    if (apiToken && !config.headers.common.Authorization) {
        config.headers.common.Authorization = `Bearer ${apiToken}`;
    }

    return config;
});
*/

// Logout user when the api token is not working (expired or being refreshed)
/**
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        store.dispatch('Auth/logout');
        router.push('login');
    }

    return Promise.reject(error);
});
*/