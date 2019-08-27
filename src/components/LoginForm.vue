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
          <input type="checkbox" class="form__checkbox" v-model="keepLoggedIn" @change="updateCheckbox"/>
          <span class="form__label-text">Keep me logged in</span>
        </label>
      </div>   
      <button class="form__login-btn" type="submit" @click.prevent="login" :disabled="loading">Login</button>
    </form>
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
      errorMessage: '',
      loading: false
    }
  },
  components: {
    'c-loader': Loading,
    'c-toast-alert': Toast
  },
  computed: {
    keepLoggedIn() {
      return this.$store.state.keepLoggedIn;
    }
  },
  methods: {
    onShowLoader: function() {

    },
    login: function() {
      if(this.username != '' && this.password != '') {
        let postableData = {
          email: this.username,
          password: this.password 
        }
        this.$http.post('https://bench-api.applover.pl/api/v1/login', postableData).then( res => {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.$store.dispatch('update_user_name',this.username);
            this.$store.state.login = true;
            this.$router.push('/generator')


            if (this.keepLoggedIn) {
              localStorage.setItem('login', true);
            }
           
            
          }, 2000)
        }).catch( err => {
            this.loading = false;
            this.errorMessage = err.statusText
            this.showErrorToast = true;
            this.$store.state.login = false;
            localStorage.setItem('login', false);
            this.$router.push('/login')
        })
      }
    },
    updateCheckbox: function() {
       this.$store.dispatch('update_login_checkbox',this.keepLoggedIn);
    }
  }
}
</script>
<style scoped>
</style>