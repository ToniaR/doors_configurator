import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import LoginForm from './components/LoginForm.vue';
import Home from './components/Home.vue';
import '../src/styles/app.scss'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
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
    render: h => h(App),
    methods:{
        checkLogin(){
            if(!JSON.parse(localStorage.getItem('login'))){
                this.$router.push('/login');
            }else{
                this.$router.push('/home');
            }
        }
    }
}).$mount('#app')


Vue.config.productionTip = false
