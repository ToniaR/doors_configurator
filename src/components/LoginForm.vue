<template>
  <div id="loginForm" class="login-form--blured">
    <c-toast-alert v-show="showErrorToast" :content="errorMessage"></c-toast-alert>
    <h1 class="form__title">Log in</h1>
    <form action="/post">
      <div class="form-field">
        <input type="email" placeholder="Email address" class="form__input" v-model="username"/>
      </div>
      <div class="form-field">
        <input type="password" placeholder="Password" class="form__input" v-model="password"/>   
      </div>
      <div class="form-field">
        <label class="form__label">
          <input type="checkbox" class="form__checkbox" v-model="keepLoggedIn"/>
          Keep me logged in
        </label>
      </div>   
      <button class="form__login-btn" type="submit" @click.prevent="login">Login</button>
    </form>
    <!-- v-show="loading" -->
    <c-loader v-if="loading"></c-loader> 
  </div>
</template>
 
<script>
import Loading from './Loading.vue';
import Toast from './Toast.vue';
import { setTimeout } from 'timers';


export default {
  data () {
    return {
      username: '',
      password: '',
      showErrorToast: false,
    }
  },
  components: {
    'c-loader': Loading,
    'c-toast-alert': Toast
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    // username() {
    //   return this.$store.state.username;
    // },
    // password() {
    //   return this.$store.state.password;
    // },
    // showErrorToast() {
    //   return this.$store.state.showErrorToast;
    // },
    errorMessage() {
      return this.$store.state.errorMessage;
    },
    keepLoggedIn() {
      return this.$store.state.keepLoggedIn;
    }
  },
  methods: {
    login: function() {
      if(this.username != '' && this.password != '') {
        let postableData = {
          email: this.username,
          password: this.password 
        }
        this.$http.post('https://bench-api.applover.pl/api/v1/login', postableData).then( res => {
          this.$store.state.loading = true;

          // setTimeout(() => {
          //   this.$store.state.loading = false;
          //   this.$store.dispatch('update_user_name',this.username);

          //   this.$router.push('/home')
          //   localStorage.setItem('login', true);
            
          // }, 10000)
        }, err => {
            this.errorMessage = err.statusText
            this.showErrorToast = true;
            localStorage.setItem('login', false);
            this.$router.push('/login')
        })
        
        this.loading = true;
      }
    }
  }
}
</script>
<style scoped>
</style>