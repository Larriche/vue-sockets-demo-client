import { axios } from './index';

export default {
	/**
	 * Try authenticating user by posting user data to server
	 */
    authenticate(user) {
        return axios.post('auth/login', user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },

    /**
	 * Sign up a new user
	 */
    signup(user) {
        return axios.post('auth/signup', user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    }
}