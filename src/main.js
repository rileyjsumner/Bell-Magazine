import Vue from 'vue';
import App from './App'
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/Home').default, name: 'Root' },
    { path: '/Home', component: require('./components/Home').default, name: 'Home' },
    { path: '/About', component: require('./components/About').default, name: 'About'},
    { path: '/Contact', component: require('./components/Contact').default, name: 'Contact'},
    { path: '/Design', component: require('./components/DesignKit').default, name: 'Design' },
    { path: '/Staff', component: require('./components/StaffDirectory').default, name: 'Staff' },
    { path: '/Admin', component: require('./components/admin/AdminPanel').default, name: 'Admin'}
];
let router = new VueRouter({mode: 'history', routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
