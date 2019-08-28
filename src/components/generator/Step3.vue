<template>
    <div id="propsSetterStep3">
        <div class="home__generator-nav">
          <p class="generator__label">Choose color</p>
          <hr class="generator__divider">
          <div class="generator__radio-block generator__radio-block--inline">
              <div class="generator__color generator__color--black"></div>
              <label for="b-color" class="generator__label generator__radio-label">
                  <input type="radio" id="b-color" name="selector"  v-model="doorColor" value="#000000">
                  <span>Black</span>
                  
                  <div class="check"><div class="inside"></div></div>
              </label>
          </div>
          <div class="generator__radio-block generator__radio-block--inline">
              <div class="generator__color generator__color--gray"></div>
              <label for="g-color" class="generator__label generator__radio-label">
                  <input type="radio" id="g-color" name="selector"  v-model="doorColor" value="#797474">
                  <span>Gray</span>
                  
                  <div class="check"><div class="inside"></div></div>
              </label>
          </div>
          <div class="generator__radio-block generator__radio-block--inline">
              <div class="generator__color generator__color--white"></div>
              <label for="w-color" class="generator__label generator__radio-label">
                  <input type="radio" id="w-color" name="selector"  v-model="doorColor" value="#F4F2F2">
                  <span>White</span>
                  
                  <div class="check"><div class="inside"></div></div>
              </label>
          </div>
        </div>    
    </div>
</template>
<script>
import { scrypt } from 'crypto';


export default {
  data () {
    return {
      color: ''
    }
  },
  watch: {
    doorColor: function() {
      this.onSetColor();
    }
  },
  computed: {
    doorColor: {
      get() {
        return this.$store.state.doorColor;
      },
      set(value) {
        this.$store.commit('set_door_color', value);
      }
    }
  },
  methods: {
    onSetColor: function() {
        let doors = document.querySelectorAll('.door');
        console.log(this.doorColor);
        doors.forEach(door => {
          let that = this;
          let posts = document.querySelectorAll('.post');
          let beams = document.querySelectorAll('.beam');
          door.style.borderColor = that.doorColor;
          posts.forEach(post => {
            post.style.backgroundColor = that.doorColor;
          })
          beams.forEach(beam => {
            beam.style.backgroundColor = that.doorColor;
          })
        })
    }
  }
}
</script>