import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import { Globals } from './mixins';

import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:5000');

Vue.use(VueSocketIO, SocketInstance);

// Register global mixins
Vue.mixin({
  mixins: [Globals]
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
