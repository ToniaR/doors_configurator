import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
        // loading: false,
        loadingProgress: 0,
        username: '',
        password: '',
        keepLoggedIn: false,
        login: false,
        organization: {},
        doorType: 'single',
        doorWidth: 0,
        doorHeight: 0,
        step: 1
    },
    mutations: {
        username(state,name){
            state.username = name;
        },
        loginUpdate(state, name) {
            state.loading = name;
        },
        keepLoggedIn(state, name) {
            state.keepLoggedIn = !name;
        },
        organization(state, name) {
            state.organization = name;
        },
        set_door_type(state, name) {
            state.doorType = name
        },
        set_door_width(state, name) {
            state.doorWidth = name
        },
        set_door_height(state, name) {
            state.doorHeight = name
        },
        set_step(state, name) {
            state.step = name;
        }

    },
    actions: {
        update_user_name(store, name) {
            store.commit('username', name);
        },
        update_login_checkbox(store, name) {
            store.commit('keepLoggedIn', name);
        }
    }
})