<template>
  <div id="appHeader">
    <header class="header-wrapper">
        <a href="#" class="header-wrapper__logo-block">
          <img src="../img/Logo@2x.png" class="header-wrapper__logo" alt="logo"/>
        </a>
        <div class="header-wrapper__nav-block"><!-- change class name-->
            <section class="header-wrapper__lang-block">
                <label class="header-wrapper__label">{{ $t('select_lang') }}</label>
                <select class="header-wrapper__select" @change="setLocale($event)">
                    <option value="en">English</option>
                    <option value="pl">Polski</option>
                </select>
            </section>
            <button v-if="isLogin || btnIsVisible" class="header-wrapper__org-btn" @click.prevent="showData">{{ $t('my_organization') }}</button>
            <transition name="fade">
              <div v-show="isVisible" :class="['header-wrapper__tooltip', { isVisible: 'header-wrapper__tooltip--active'}]">
                <p>{{ $t('organization') }}</p>
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
    },
    isLogin() {
      return this.$store.state.login;
    },
    btnIsVisible() {
        return JSON.parse(localStorage.getItem('login'));
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
    },
    setLocale(event) {
        let locale = event.target.value;
        this.$i18n.locale = locale;
        localStorage.setItem('lang', locale);
    }
  },
  created(){
    localStorage.setItem('lang', 'en');
    this.getOrganizationData();
  }
}
</script>
<style scoped>
</style>