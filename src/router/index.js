import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: require('../views/Home').default, name: 'Root' },
        { path: '/Home', component: require('../views/Home').default, name: 'Home' },
        { path: '/About', component: require('../views/About').default, name: 'About'},
        { path: '/Contact', component: require('../views/Contact').default, name: 'Contact'},
        { path: '/Design', component: require('../components/DesignKit').default, name: 'Design' },
        { path: '/Staff', component: require('../components/StaffDirectory').default, name: 'Staff' },
        { path: '/Admin', component: require('../components/admin/AdminPanel').default, name: 'Admin'},
        { path: '/Login', component: require('../views/admin/Login').default, name: 'Login'}
    ],
    mode: 'history'
});
