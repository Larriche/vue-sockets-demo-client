import MessagesService from '../../services/messages';
import { SET_MESSAGES } from '../mutation_types';
import { ADD_NEW_MESSAGE } from '../mutation_types';

const state = {
    messages: []
};

const getters = {
    /**
     * Get all messages saved in the state
     *
     * @param {Object} state
     */
    getAll(state) {
        return state.messages;
    }
};

const mutations = {
    /**
	 * Save messages data in state
	 *
	 * @param {Object} state Application state
	 * @param {Object} payload Data as gotten from the API endpoint
	 */
    [SET_MESSAGES] (state, payload) {
        state.messages = payload;
    },

    [ADD_NEW_MESSAGE] (state, message) {
        state.messages.push(message);
    }
};

const actions = {
    /**
	 * Get messages and save in application state
	 *
	 * @param {Function} commit(mutation_type, response): Commits data to store
	 * @param {Object} query Key-value pairs to use for getting messages
	 */
    loadAll({ commit }, query) {
        return MessagesService.all(query)
            .then((response) => {
                commit(SET_MESSAGES, response);
                return Promise.resolve(response);
            })
            .catch((error) => Promise.reject(error));
    },

    addNewMessage({commit}, message) {
        commit(ADD_NEW_MESSAGE, message);
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