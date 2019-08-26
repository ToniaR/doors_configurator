<template>
  <div id="appHeader">
    <header class="header-wrapper">
        <a href="#" class="header-wrapper__logo"></a>
        <div class="header-wrapper__nav-block"><!-- change class name-->
            <section class="header-wrapper__lang-block">
                <label class="header-wrapper__label">Select language</label>
                <select class="header-wrapper__select">
                    <option>English</option>
                    <option>Polski</option>
                </select>
            </section>
            <button class="header-wrapper__org-btn" @click.prevent="showData">My organization</button>
            <transition name="fade">
              <div v-show="isVisible" :class="['header-wrapper__tooltip', { isVisible: 'header-wrapper__tooltip--active'}]">
                <p>Organization</p>
                <ul>
                  <li v-for="(org, key) in organization" :key="key" v-if="key !== 'id'">{{ key }}: {{ org }}</li>
                </ul>
              </div>
            </transition>
        </div>
    </header>
  </div>
</template>
 
<script>


export default {
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    showBtn() {
      return this.$store.state.login;
    },
    organization() {
      return this.$store.state.organization;
    }
  },
  methods: {
    showData() {
      this.isVisible = !this.isVisible;
    },
    getOrganizationData: function() {
      this.$http.get('https://bench-api.applover.pl/api/docs/simulate/organizations/display_organization').then(function(data) {
        this.$store.commit('organization',data.body);
      })
    }
  },
  created(){
    this.getOrganizationData();
  }
}
</script>
<style scoped>
</style>