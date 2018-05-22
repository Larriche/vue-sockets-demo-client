import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { store } from '../store';


Vue.use(VueRouter);

export const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    let loggedIn = store.getters['Auth/check'];

    // Redirect to login [auth middleware]
    if (!loggedIn && to.name !== 'login') {
        next({ name: 'login' });
    }

    next();
});
