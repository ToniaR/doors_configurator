<template>
  <div id="app">
    <c-header></c-header>
    <router-view></router-view>
  </div>
</template>
 
<script>
import LoginForm from './components/LoginForm.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    'c-login-form': LoginForm,
    'c-header': AppHeader
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>