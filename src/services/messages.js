import { axios } from './index';

export default {
	/**
	 * Get all messages
	 *
	 * @param {Object} data Key-value pairs as query params
	 */
    all(data) {
        return axios.get('messages', {
            params: data
        })
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    }
};