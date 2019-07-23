import Vue from 'vue'

import App from './App.vue'
import DesignKit from './components/DesignKit.vue';

import Router from 'vue-router';

Vue.config.productionTip = false;
Vue.use(Router);

const routes = [
    { path: '/', component: { App } },
    { path: '/Home', component: { App } },
    { path: '/Design', component: { DesignKit } }
];

const router = new Router({routes});

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');
