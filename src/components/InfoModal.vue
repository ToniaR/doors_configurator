<template>
    <div id="infoModal">
        <div class="modal__shadow"></div>
        <div class="modal__wrapper">
            <section class="modal__header">
                <button class="modal__btn--close" @click="onHide">
                    <i class="fas fa-times"></i>
                </button>
                <h1>{{ $t('door_type') }}</h1>
                <hr class="modal__divider">
            </section>
            <section class="modal__content">
                <section class="modal__section">
                    <p class="modal__section-title">{{ $t('single') }}</p>
                    <div class="modal__section-item"></div>
                </section>
                <section class="modal__section">
                    <p class="modal__section-title">{{ $t('double') }}</p>
                    <div class="modal__section-item"></div>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        showModal: {
            get() {
                return this.$store.state.showModal;
            },
            set(value) {
                this.$store.commit('set_show_modal', value)
            }
        }
    },
    methods: {
        onHide() {
            this.$store.commit('set_show_modal', !this.showModal);
        }
    }
}
</script>