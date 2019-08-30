<template>
  <div id="generatorWrapper">
      <c-steps></c-steps>
      <section class="generator">
        <c-generator-view></c-generator-view>
        <c-props-setter></c-props-setter>
      </section>
      <c-modal v-show="showModal"></c-modal>
  </div>
</template>
 
<script>
import PropsSetter from './generator/PropsSetter.vue';
import GeneratorView from './generator/GeneratorView.vue';
import Steps from './generator/Steps.vue';
import InfoModal from './InfoModal.vue';

export default {
  components: {
    'c-props-setter': PropsSetter,
    'c-generator-view': GeneratorView,
    'c-steps': Steps,
    'c-modal': InfoModal
  },
  data () {
    return {
    }
  },
  computed: {
    door() {
      return this.$store.state.door;
    },
    showModal() {
      return this.$store.state.showModal;
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>