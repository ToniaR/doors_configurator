<template>
    <div id="propsSetterStep2">
        <p class="generator__label">{{ $t('door_division') }}</p>       
        <hr class="generator__divider">
        <div class="form-field">
            <label class="generator__label generator__group-label">
                {{ $t('number_of_beams') }}
                <span class="generator__input-group">
                    <input type="text" class="generator__input generator__input--square" :value="beams" max="4">
                    <button class="generator__btn--square" @click="increaseBeams" :disable="beams == 4">+</button> 
                    <button class="generator__btn--square" @click="decreaseBeams" :disable="beams == 0">-</button>
                </span>
            </label>
        </div>
        <div class="form-field">
            <label class="generator__label generator__group-label">
                {{ $t('number_of_posts') }}
                <span class="generator__input-group">
                    <input type="text" class="generator__input generator__input--square" :value="posts" max="2">
                    <button class="generator__btn--square" @click="increasePosts" :disable="posts == 2">+</button> 
                    <button class="generator__btn--square" @click="decreasePosts" :disable="posts == 0">-</button>
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
  },
  computed: {
        beams: {
            get() {
                return this.$store.state.beams;
            },
            set(value) {
                this.$store.commit('set_beams', value);
            }
        },
        posts: {
            get() {
                return this.$store.state.posts;
            },
            set(value) {
                this.$store.commit('set_posts', value);
            }
        },
        doorWidth() {
            return this.$store.state.doorWidth;
        },
        doorHeight() {
            return this.$store.state.doorHeight;
        }
  },
  methods: {
      increaseBeams: function() {
          if(this.beams < 4) {
            this.beams +=1;
            this.addBeam(this.beams);
          }
      },
      decreaseBeams: function() {
          if(this.beams > 0) {
            this.beams -=1;
            this.removeBeam();
          }
      },
      increasePosts: function() {
          if(this.posts < 2) {
            this.posts +=1;
            this.addPost(this.posts);
          }
      },
      decreasePosts: function() {
          if(this.posts > 0) {
            this.posts -=1;
            this.removePost();
          }
      },
      addBeam: function(num) {
          let doors = document.querySelectorAll('.door');

          doors.forEach(door => {
            let fraction, top = 0;
           let that = this;
           let beam = document.createElement('div');
           beam.className = 'beam';
           door.appendChild(beam);
           fraction = (that.doorHeight / 5);
           top = that.doorHeight - (fraction * num);
           beam.style.top = top + 'px';
          });
      },
      addPost: function(num) {

          let doors = document.querySelectorAll('.door');
          doors.forEach(door => {
            let fraction, left = 0;
            let that = this;
            let post = document.createElement('div');
            post.className = 'post';
            door.appendChild(post);
            fraction = Math.round(that.doorWidth / 3); //size of single fraction
            left = that.doorWidth - (fraction * num);
            post.style.left = left + 'px';
          });
      },
    removeBeam: function() {
        let doors = document.querySelectorAll('.door');

        doors.forEach(door => {
            let beams = door.childNodes
            beams.forEach(p => {
                if(p.className == 'beam') {
                    door.removeChild(p)
                }
            })
        });
    },
    removePost: function() {
        let doors = document.querySelectorAll('.door');

        // doors.removeChild(post);
        doors.forEach((door) => {
            let posts = door.childNodes
            posts.forEach(p => {
                if(p.className == 'post') {
                    door.removeChild(p)
                }
            })
        });
    }
  }
}

</script>