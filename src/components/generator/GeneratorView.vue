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
        beemsNum: 0,
        postsNum: 0
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
      beams: function() {
        if (this.beemsNum < 4) {
        this.beemsNum += 1;
        }
        this.addBeam(this.beemsNum);
      },
      posts: function() {
        if (this.postsNum < 2) {
        this.postsNum += 1;
        }
        this.addPost(this.postsNum);
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

        //   if ((this.doorType == 'double') && !(outputBlock.contains(document.querySelector('.door--right')))) {
          if(this.doorType == 'double') {
              let door = document.createElement('div');
              door.className = 'door door--right';

              outputBlock.appendChild(door);
          }
          else {
              if (outputBlock.contains(document.querySelector('.door--right'))) {
                  outputBlock.removeChild(document.querySelector('.door--right'));
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
      },
      addBeam: function(num) {
          let doors = document.querySelectorAll('.door');
          doors.forEach(door => {
           let that = this;
           let beam = document.createElement('div');
           beam.className = 'beam';
           door.appendChild(beam);
           let fraction = (that.doorHeight / 5);
           let top = that.doorHeight - (fraction * num);
           beam.style.top = top + 'px';
          });
      },
      addPost: function(num) {
           console.log('num', num )
          let doors = document.querySelectorAll('.door');
          doors.forEach(door => {
           let that = this;
           let post = document.createElement('div');
           post.className = 'post';
           door.appendChild(post);
           let fraction = (that.doorWidth / 3); //size of single fraction
           console.log('fraction', fraction);
           let left = that.doorWidth - (fraction * num);
           post.style.left = left + 'px';
          });
      }
  }
}
</script>
<style scoped>
</style>