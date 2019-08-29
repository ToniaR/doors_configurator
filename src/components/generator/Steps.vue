<template>
    <div class="home__steps-block">
    <div class="home__step">
        <div :class="['home__step-circle', {'home__step-circle--active' : firstStep}]">
        <i class="fas fa-circle"></i>
        </div>
        <p class="home__step-title">{{ $t('step1') }}</p>
        <p class="home__step-title">{{ $t('choose_door') }}</p>
    </div>
    <span class="home-step__progress-line"></span>
    <div class="home__step">
        <div :class="['home__step-circle', {'home__step-circle--active' : secondStep}]">
        <i class="fas fa-circle"></i>
        </div>
        <p class="home__step-title">{{ $t('step2') }}</p>
        <p class="home__step-title">{{ $t('choose_door_division') }}</p>
    </div>
    <span class="home-step__progress-line"></span>
    <div class="home__step">
        <div :class="['home__step-circle', {'home__step-circle--active' : thirdStep}]">
        <i class="fas fa-circle"></i>
        </div>
        <p class="home__step-title">{{ $t('step3') }}</p>
        <p class="home__step-title">{{ $t('choose_color') }}</p>
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