import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import LoginForm from './components/LoginForm.vue';
import Generator from './components/Generator.vue';
import '../src/styles/app.scss'
import { store } from './store/store'
import { i18n } from './plugins/i18n'


Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
    routes: [
        {
            path: '/generator',
            name: 'Generator',
            component: Generator
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginForm
        }
    ]
})

new Vue({
    store: store,
    el: '#app',
    created: function() {
        this.checkLogin();
    },
    watch:{
        '$route':'checkLogin'
    },
    router,
    i18n, 
    render: h => h(App),
    methods:{
        checkLogin(){
            if(JSON.parse(localStorage.getItem('login')) || this.$store.state.login) {
                this.$router.push('/generator');
            }else{
                this.$router.push('/login');
            }
        }
    }
}).$mount('#app')


Vue.config.productionTip = false
