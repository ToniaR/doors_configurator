<template>
  <div id="appHeader">
    <header class="header-wrapper">
        <a href="#" class="header-wrapper__logo"></a>
        <div class="header-wrapper__nav-block"><!-- change class name-->
            <section class="header-wrapper__lang-block">
                <label>Select language</label>
                <select>
                    <option>English</option>
                    <option>Polski</option>
                </select>
            </section>
            <button class="header-wrapper__org-btn">My organization</button>
        </div>
    </header>
  </div>
</template>
 
<script>


export default {
  props: ['userLoggedIn'],
  data () {
    return {
      userLogged: this.userLoggedIn
    }
  },
  method: {
  }
}
</script>
<style scoped>
</style>