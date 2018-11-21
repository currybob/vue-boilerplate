import Vue from 'vue';
import './plugins/axios';
import './styles.scss';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import store from './store';
import locale from 'element-ui/lib/locale/lang/ko';

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
