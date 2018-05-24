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

const Commands = resolve => {
    require.ensure(['../components/commands/Index.vue'], () => {
        resolve(require('../components/commands/Index.vue'));
    });
};

const Users = resolve => {
    require.ensure(['../components/users/Index.vue'], () => {
        resolve(require('../components/users/Index.vue'));
    });
};

const Login = resolve => {
    require.ensure(['../components/auth/Login.vue'], () => {
        resolve(require('../components/auth/Login.vue'));
    });
};

const SignUp = resolve => {
    require.ensure(['../components/auth/SignUp.vue'], () => {
        resolve(require('../components/auth/SignUp.vue'));
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
        path: '/commands',
        component: Commands,
        name: 'commands'
    },
    {
        path: '/users',
        component: Users,
        name: 'users'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/signup',
        component: SignUp,
        name: 'signup'
    }
];