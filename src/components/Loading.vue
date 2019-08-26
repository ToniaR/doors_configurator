<template>
  <div id="loading">
    <div class="loader-wrapper">
      <p class="loader-wrapper__title">Processing...</p>
      <div class="loader-wrapper__progress-bar-wrapper">
        <div class="loader-wrapper__progress-bar">
          <span class="loader-wrapper__progress-bar-fill" :style="{ width: percentage + '%' }"></span>
          <span class="loader-wrapper__progress-info">{{ percent }}%</span>
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
      percentage: 0,
      loadTime: 0,
      interval: null
    }
  },
  created() {
    let perfData = window.performance.timing;
    let estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
    this.loadTime = parseInt((estimatedTime / 1000) % 60) * 100;
    this.doProgress();



  }, 
  computed: {
      percent() {
        return this.percentage;
      }
      // loadingProgress() {
      //   return this.$store.state.loadingProgress;
      // },
      // loaderWidth: function() {
      //   return this.progress;
      // },
      // progressNum: function() {
      //   return this.progress;
      // }
  },

  watch: {
    percentage(val) {
      if (val >= 100) {
        console.log('complete');
        clearInterval(this.interval)
      }
    }
  },
  methods: {
    doProgress() {
      // var interval = setInterval(() => {
      //   if(this.percentage < 100)
      //     this.percentage += .1;
      //   else
      //     clearInterval(interval);
      // })

      let step = this.loadTime / 100;
      this.interval = setInterval(() => {
        this.percentage++
      }, step);
    }
  }
}
</script>