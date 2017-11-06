<template lang="html">
  <div class="apps wrapper">
    <app-admin v-if="auth.isAdmin" class="m-3"/>
    <app v-for="n in 12" :key="n"></app>
    <div class="card m-3 mt2 fill--blue center">
      Load more apps.
    </div>
  </div>
</template>

<script>
import App from '~/components/App.vue'
import AppAdmin from '~/components/AppAdmin.vue'
export default {
  computed: {
    auth () {
      return this.$store.getters.auth
    }
  },
  components: {
    App,
    AppAdmin
  }
}
</script>

<style lang="scss" scoped="">
.apps {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 1;
}
</style>
