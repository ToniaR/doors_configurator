<template>
  <div id="home">
      <c-steps></c-steps>
      <section class="home__generator">
        <c-generator-view></c-generator-view>
        <c-props-setter></c-props-setter>
      </section>
  </div>
</template>
 
<script>
import PropsSetter from './generator/PropsSetter.vue';
import GeneratorView from './generator/GeneratorView.vue';
import Steps from './generator/Steps.vue';

export default {
  components: {
    'c-props-setter': PropsSetter,
    'c-generator-view': GeneratorView,
    'c-steps': Steps
  },
  data () {
    return {
    }
  },
  computed: {
    door() {
      return this.$store.state.door;
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>