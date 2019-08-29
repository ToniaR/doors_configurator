<template>
    <div id="infoModal">
        <button class="modal__btn--close">Close</button>
        <h1>{{ $t('door_type') }}</h1>
        <hr>
        <section class="modal__section">
            <p class="modal__section-title">{{ $t('single') }}</p>
            <div class="modal__section-item"></div>
        </section>
        <section class="modal__section">
            <p class="modal__section-title">{{ $t('double') }}</p>
            <div class="modal__section-item"></div>
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>