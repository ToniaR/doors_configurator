<template>
    <div class="generator__view">
        <div class="generator__toggle" id="viewToggle">
            <label class="generator__toggle-label">
                <input type="checkbox" class="generator__toggle-input" v-model="view2D">
                <span class="generator__toggle-text">3D</span>
                <span class="generator__toggle-text">2D</span>
            </label>
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
        view2D: null
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
    },
    view2D: function() {
        let toggle = document.getElementById('viewToggle');
        let toggleClass = 'generator__toggle--active'
        if (toggle.classList.contains(toggleClass)) {
            toggle.classList.remove(toggleClass);
        }
        else {
            toggle.classList.add(toggleClass);
        }

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