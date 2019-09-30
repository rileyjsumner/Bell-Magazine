import Vue from 'vue';
import App from './App';
import router from './router';
import Editor from 'vue-editor-js';

Vue.use(Editor);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
