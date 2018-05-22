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
	 * Get currently logged in user's info. Needed to refresh
	 * users data
	 *
	 * @param {Integer} id Id of user
	 */
    getUserInfo(id) {
        return axios.get('users/' + id)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    }
}