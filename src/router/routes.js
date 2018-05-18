const Messages = resolve => {
    require.ensure(['../components/messages/Index.vue'], () => {
        resolve(require('../components/messages/Index.vue'))
    })
};

export default [
    {
        path: '/messages',
        component: Messages,
        name: 'messages'
    }
];