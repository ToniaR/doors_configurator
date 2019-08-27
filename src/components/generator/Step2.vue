<template>
    <div id="propsSetterStep2">
        <p class="generator__label">Door division</p>       
        <div class="form-field">
            <label class="generator__label generator__group-label">
                Number of beams
                <span class="generator__input-group">
                    <input type="text" class="generator__input generator__input--square">
                    <button>+</button>
                    <button>-</button>
                </span>
            </label>
        </div>
        <div class="form-field">
            <label class="generator__label generator__group-label">
                Number of posts
                <span class="generator__input-group">
                    <input type="text" class="generator__input generator__input--square">
                    <button>+</button>
                    <button>-</button>
                </span>
            </label>
        </div>
    </div>
</template>
<script>
import { scrypt } from 'crypto';


export default {
  data () {
    return {
    }
  }
}
</script>