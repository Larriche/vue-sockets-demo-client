import ActivitiesService from '../../services/activities';
import { SET_ACTIVITIES } from '../mutation_types';

const state = {
    activities: []
};

const getters = {
    /**
     * Get all activities saved in the state
     *
     * @param {Object} state
     */
    getAll(state) {
        return state.activities;
    }
};

const mutations = {
    /**
	 * Save activities data in state
	 *
	 * @param {Object} state Application state
	 * @param {Object} payload Data as gotten from the API endpoint
	 */
    [SET_ACTIVITIES](state, payload) {
        state.activities = payload;
    }
};

const actions = {
    /**
	 * Get activities and save in application state
	 *
	 * @param {Function} commit(mutation_type, response): Commits data to store
	 * @param {Object} query Key-value pairs to use for getting messages
	 */
    loadAll({ commit }, query) {
        return ActivitiesService.all(query)
            .then((response) => {
                commit(SET_ACTIVITIES, response);
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