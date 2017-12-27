// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueNativeSock from 'vue-native-websocket'

Vue.use(VueNativeSock, 'ws://localhost:8082/socket.io')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false
    }
  },
  mutations: {
    SOCKET_ONOPEN (state, event) {
      console.log(event)
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event) {
      console.log(event)
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.log(event)
      console.error(state, event)
    },
    SOCKET_ONMESSAGE (state, message) {
      console.log(message)
      state.message = message
    },
    WS_RECONNECT (state, count) {
      console.log(state)
      console.info(state, count)
    },
    WS_RECONNECT_ERROR (state) {
      console.log(state)
      state.socket.reconnectError = true
    }
  }
})
