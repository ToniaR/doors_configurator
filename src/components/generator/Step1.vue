<template>
    <div id="step1">
        <p class="generator__label">
            {{ $t('door_type') }}
            <button class="generator__info-btn"></button>
        </p>
        <hr class="generator__divider">
        <div class="generator__radio-block">
            <label for="s-option" class="generator__label generator__radio-label">
                <input type="radio" id="s-option" name="selector"  v-model="doorType" value="single">
                <span>{{ $t('single_door') }}</span>
                
                <div class="check"><div class="inside"></div></div>
            </label>
        </div>
        <div class="generator__radio-block">
        <label for="d-option" class="generator__label generator__radio-label">
            <input type="radio" id="d-option" name="selector" v-model="doorType" value="double">
            <span>{{ $t('double_door') }}</span>
            
            <div class="check"><div class="inside"></div></div>
        </label>
        </div>
        <p class="generator__label">{{ $t('door_size') }}</p>
        <hr class="generator__divider">
        <div class="form-field">
            <label class="generator__label generator__group-label">
                {{ $t('width') }}
                <span class="generator__input-group">
                <input type="text" class="generator__input" max="160" :value="doorWidth" @input="updateWidth">
                cm
                </span>
            </label>
        </div>
        <div class="form-field">
            <label class="generator__label generator__group-label">
                {{ $t('height') }}
                <span class="generator__input-group">
                <input type="text" class="generator__input" max="300" :value="doorHeight" @input="updateHeight">
                cm
                </span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    doorType: {
        get() {
            return this.$store.state.doorType;
        },
        set(value) {
            this.$store.commit('set_door_type', value)
        }
    },
    doorWidth: {
        get() {
            return this.$store.state.doorWidth;
        },
        set(value) {
            this.$store.commit('set_door_width', value)
        }
    },
    doorHeight: {
        get() {
            return this.$store.state.doorHeight;
        },
        set(value) {
            this.$store.commit('set_door_width', value)
        }
    }
  },
  methods: {
    onSetType: function() {
        this.$store.dispatch('update_door_type', !this.door.single)
    },
    updateWidth (e) {
        this.$store.commit('set_door_width', e.target.value)
    },
    updateHeight (e) {
        this.$store.commit('set_door_height', e.target.value)
    }
  }
}
</script>