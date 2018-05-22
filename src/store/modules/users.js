import UsersService from '../../services/users';
import { SET_USERS } from '../mutation_types';

const state = {
    users: []
};

const getters = {
    /**
     * Get all users saved in the state
     *
     * @param {Object} state
     */
    getAll(state) {
        return state.users;
    }
};

const mutations = {
    /**
	 * Save users data in state
	 *
	 * @param {Object} state Application state
	 * @param {Object} payload Data as gotten from the API endpoint
	 */
    [SET_USERS](state, payload) {
        state.users = payload;
    },
};

const actions = {
    /**
	 * Get users and save in application state
	 *
	 * @param {Function} commit(mutation_type, response): Commits data to store
	 * @param {Object} query Key-value pairs to use for getting messages
	 */
    loadAll({ commit }, query) {
        return UsersService.all(query)
            .then((response) => {
                commit(SET_USERS, response);
                return Promise.resolve(response);
            })
            .catch((error) => Promise.reject(error));
    }
};

const namespaced = true;

export default {
    namespaced,
    state,
    actions,
    getters,
    mutations
}