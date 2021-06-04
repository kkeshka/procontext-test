import Vue from 'vue';
import VueMask from 'v-mask';
import App from './App.vue';
import store from './store';

Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
