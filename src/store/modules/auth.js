import AuthService from '../../services/auth';
import { AUTHENTICATE, AUTHENTICATION_FAILED, UPDATE_USER_INFO, LOGOUT } from '../mutation_types';

// Auth State
const state = {
    isLoggedIn: localStorage.getItem('user') ? true : false,
    user: JSON.parse(localStorage.getItem('user')) || {}
};

// Auth Getters
const getters = {
	/**
	 * Check if the user has been authenticated.
	 * Returns true if user is logged in.
	 */
    check(state) {
        return state.isLoggedIn;
    },

	/**
	 * Get the currently logged in user.
	 * Returns a user object
	 */
    getUser(state) {
        return state.user;
    }
};

// Auth Mutations
const mutations = {
	/**
	 * Set that user is logged in
	 */
    [AUTHENTICATE](state) {
        state.isLoggedIn = true;
    },

	/**
	 * Set that user is not logged in
	 */
    [AUTHENTICATION_FAILED](state) {
        state.isLoggedIn = false;
    },

    /**
	 * Update user data in the state
	 */
    [UPDATE_USER_INFO](state, user) {
        if (user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            state.user = {};
            localStorage.removeItem('user');
        }
    },

	/**
	 * Clear user data and log the user out
	 */
    [LOGOUT](state) {
        state.user = {};
        state.isLoggedIn = false;
    }
};

// Auth Actions
const actions = {
	/**
	 * Save data about user logged in in the state
	 *
	 * @param {*} param0
	 * @param {Object} user Data about authenticated user
	 */
    authenticate({ commit }, user) {
        return AuthService.authenticate(user)
            .then((response) => {
                commit(AUTHENTICATE);
                commit(UPDATE_USER_INFO, response);

                return Promise.resolve(response);
            }, (error) => {
                commit(AUTHENTICATION_FAILED);
                commit(UPDATE_USER_INFO);

                return Promise.reject(error);
            });
    },

	/**
	 * Log user out
	 *
	 * @param {*} param0
	 */
    logout({ commit }) {
        commit(LOGOUT);
        commit(UPDATE_USER_INFO);
    },

	/**
	 * Load user data
	 *
	 * @param {*} param0
	 */
    getUserInfo({ commit, getters }) {
        let user_id = getters.getUser.id;
        return AuthService.getUserInfo(user_id)
            .then((response) => {
                commit(UPDATE_USER_INFO, response);

                return Promise.resolve(response);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
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