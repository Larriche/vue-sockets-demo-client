const Messages = resolve => {
    require.ensure(['../components/messages/Index.vue'], () => {
        resolve(require('../components/messages/Index.vue'));
    });
};

const Actions = resolve => {
    require.ensure(['../components/actions/Index.vue'], () => {
        resolve(require('../components/actions/Index.vue'));
    });
};

const History = resolve => {
    require.ensure(['../components/history/Index.vue'], () => {
        resolve(require('../components/history/Index.vue'));
    });
};

const Login = resolve => {
    require.ensure(['../components/auth/Login.vue'], () => {
        resolve(require('../components/auth/Login.vue'));
    });
};

export default [
    {
        path: '/messages',
        component: Messages,
        name: 'messages'
    },
    {
        path: '/actions',
        component: Actions,
        name: 'actions'
    },
    {
        path: '/history',
        component: History,
        name: 'history'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    }
];