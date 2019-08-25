import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
        loading: false,
        loadingProgress: 0,
        username: '',
        password: '',
        errorMessage: '',
        keepLoggedIn: false
    },
    mutations: {
        username(state,name){
            state.username = name;
        },
        loading(state, load) {
            state.loading = !load;
        }
    },
    actions: {
        update_user_name(store, name) {
            store.commit('username', name);
        },
        redirect() {}
    }
})