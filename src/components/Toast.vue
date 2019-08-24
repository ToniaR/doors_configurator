<template>
  <div id="toast">
      <div class="toast-message__block" v-if="content">{{ content }}</div>
      <div class="toast-message__block" v-else>Invalid email or password</div>
  </div>
</template>
 
<script>


export default {
  props: ['content'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>