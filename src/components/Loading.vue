<template>
  <div id="loading">
    <div class="loader-wrapper">
      <p class="loader-wrapper__title">Processing...</p>
      <div class="loader-wrapper__progress-bar-wrapper">
        <div class="loader-wrapper__progress-bar">
          <span class="loader-wrapper__progress-bar-fill" :style="{ width: percentage + '%' }"></span>
          <span class="loader-wrapper__progress-info">{{ percentage | round }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
  name: 'loading',
  data () {
    return {
      percentage: 0
    }
  },
  created() {
    var interval = setInterval(() => {
      if(this.percentage < 100)
        this.percentage += .1;
      else
        clearInterval(interval);
    })
  }, 
  computed: {
      loadingProgress() {
        return this.$store.state.loadingProgress;
      },
      loaderWidth: function() {
        return this.progress;
      },
      progressNum: function() {
        return this.progress;
      }
  },
  filters: {
    round: function(value) {
      if (!value) return ''
      return Math.floor(value)
    }
  }
}
</script>