<template lang="html">
  <div class="apps wrapper">
    <app-admin v-if="auth.isAdmin" class="m-3"/>
    <app v-for="app in apps" :key="app.name" :data="app" class="m-3"></app>
    <div class="card m-3 mt2 fill--blue center">
      Load more apps.
    </div>
  </div>
</template>

<script>
import App from '~/components/App.vue'
import AppAdmin from '~/components/AppAdmin.vue'
import AppAdd from '~/components/AppAdd.vue'
export default {
  computed: {
    auth () {
      return this.$store.getters.auth
    },
    apps () {
      return this.$store.getters['apps/get']
    }
  },
  components: {
    App,
    AppAdmin,
    AppAdd
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
