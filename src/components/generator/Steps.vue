<template>
    <div class="generator__steps-block">
    <div class="steps-block__step">
        <div :class="['step__circle', {'step__circle--active' : firstStep}]">
        <i class="fas fa-circle"></i>
        </div>
        <p class="step__title">{{ $t('step1') }}</p>
        <p class="step__title">{{ $t('choose_door') }}</p>
    </div>
    <span class="step__progress-line"></span>
    <div class="steps-block__step">
        <div :class="['step__circle', {'tep__circle--active' : secondStep}]">
        <i class="fas fa-circle"></i>
        </div>
        <p class="step__title">{{ $t('step2') }}</p>
        <p class="step__title">{{ $t('choose_door_division') }}</p>
    </div>
    <span class="step__progress-line"></span>
    <div class="steps-block__step">
        <div :class="['step__circle', {'step__circle--active' : thirdStep}]">
        <i class="fas fa-circle"></i>
        </div>
        <p class="step__title">{{ $t('step3') }}</p>
        <p class="step__title">{{ $t('choose_color') }}</p>
    </div>
    </div>
</template>
<script>


export default {
  data () {
    return {
        a: true
    }
  },
  computed: {
    door() {
      return this.$store.state.door;
    },
    step() {
        return this.$store.state.step;
    },
    firstStep() {
        return this.step == 1;
    },
    secondStep() {
        return this.step == 2;
    },
    thirdStep() {
        return this.step == 3;
    }
  }
}
</script>
<style scoped>
</style>