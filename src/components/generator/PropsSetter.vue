<template>
    <div class="generator__nav">
        <c-step-1 v-show="step === 1"></c-step-1>
        <c-step-2 v-show="step === 2"></c-step-2>
        <c-step-3 v-show="step === 3"></c-step-3>

        <button v-if="step !== 1" class="generator__btn generator__btn--outlined" @click="previousStep">{{ $t('back') }}</button>
        <button :class="['generator__btn generator__btn--filled', {'generator__btn--left' : step == 1}]" @click="nextStep">{{ $t('next_step') }}</button>
    </div>
</template>
<script>
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';

export default {
    components: {
        'c-step-1': Step1,
        'c-step-2': Step2,
        'c-step-3': Step3
    },
    data() {
        return {
        }
    },
    computed: {
        step: {
            get() {
                return this.$store.state.step;
            },
            set(value) {
                this.$store.commit('set_step', value);
            }
        }
    },
    methods: {
        nextStep: function() {
            if (this.step < 3) {
                console.log('step before', this.step);
                this.step += 1
                console.log('step after', this.step);
            }
        },
        previousStep: function() {
            if (this.step !== 1) {
                this.step -= 1
            }
        }
    }
}
</script>
<style scoped>
</style>