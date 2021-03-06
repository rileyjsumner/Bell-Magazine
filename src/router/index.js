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
        { path: '/Login', component: require('../views/admin/Login').default, name: 'Login'},
        { path: '/author/:name', component: require('../components/Author').default, name: 'Author'},
        { path: '/404', component: require('../views/PageNotFound').default, name: 'NotFound'},
        { path: '/:category', component: require('../components/Category').default, name: 'Category',
            children: [
                {
                    path: ':article',
                    component: require('../components/Story').default, name: 'Article'
                }
            ]
        },
        { path: '*', component: require('../views/PageNotFound').default, name: '404'}
    ],
    mode: 'history'
});
