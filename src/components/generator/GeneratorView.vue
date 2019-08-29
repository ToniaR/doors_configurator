<template>
    <div class="home__generator-view">
        <div class="generator__toggle">
        <input type="checkbox">
        2D
        </div>
        <div class="generator__output">
            <div class="door">
            </div>
        </div>
    </div>
</template>

<script>



export default {
  data () {
    return {
    }
  },
  watch: {
    doorType: function () {
          this.setWings();
      },
      doorWidth: function () {
          this.setWidth();
      },
      doorHeight: function () {
          this.setHeight();
      }
  },
  computed: {
    doorType: {
        get() {
            return this.$store.state.doorType;
        },
        set(value) {
            this.$store.commit('set_door_type', value);
        }
    },
    doorWidth() {
        return this.$store.state.doorWidth;
    },
    doorHeight() {
        return this.$store.state.doorHeight;
    },
    beams() {
        return this.$store.state.beams;
    },
    posts() {
        return this.$store.state.posts;
    }

  },
  methods: {
      setWings: function () {
          let outputBlock = document.querySelector('.generator__output');
          let singleDoor = document.querySelector('.door');

          if(this.doorType == 'double') {
              let door = document.createElement('div');
              door.className = 'door';

              outputBlock.appendChild(door);
          }
          else {
              if (outputBlock.contains(document.querySelectorAll('.door')[1])) {
                  outputBlock.removeChild(document.querySelectorAll('.door')[1]);
              }
          }
      },
      setWidth: function () {
          let doors = document.querySelectorAll('.door');
          doors.forEach(door => {
           let that = this;
           door.style.width = that.doorWidth + "px";
          });
      },
      setHeight: function () {
          let doors = document.querySelectorAll('.door');
          doors.forEach(door => {
           let that = this;
            door.style.height = that.doorHeight + "px";
          });
      }


  }
}
</script>
<style scoped>
</style>