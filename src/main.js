import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:5000');

Vue.use(VueSocketIO, SocketInstance);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
