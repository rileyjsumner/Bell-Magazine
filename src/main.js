import Vue from 'vue';
import App from './App';
import router from './router';
import Editor from 'vue-editor-js';
import * as axios from "axios";

Vue.use(Editor);
Vue.prototype.$http = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
