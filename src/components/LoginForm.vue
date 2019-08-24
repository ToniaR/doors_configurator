<template>
  <div id="loginForm">
    <c-toast-alert v-show="showErrorToast"></c-toast-alert>
    <form action="/post">
      <input type="email" placeholder="Email address" v-model="username"/>
      <input type="password" placeholder="Password" v-model="password">
      <button type="submit" @click.prevent="login">Log in</button>
      <label>
        <input type="checkbox"/>
        Keep me logged in
      </label>
    </form>
    <c-loader v-if="loading"></c-loader>
  </div>
</template>
 
<script>
import Loading from './Loading.vue';
import Toast from './Toast.vue';
import { setTimeout } from 'timers';


export default {
  components: {
    'c-loader': Loading,
    'c-toast-alert': Toast
  },
  data () {
    return {
      loading: false,
      username: '',
      password: '',
      showErrorToast: false
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
          this.loading = true;
          setTimeout(() => {
            localStorage.setItem('login', true);
            this.$router.push('/home')
          }, 1000)
        }, err => {
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