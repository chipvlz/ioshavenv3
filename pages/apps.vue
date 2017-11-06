<template lang="html">
  <div class="apps wrapper">
    <app v-for="n in 12" :key="n"></app>
    <div class="card m-3 mt2 fill--blue center">
      Load more apps.
    </div>
  </div>
</template>

<script>
import App from '~/components/App.vue'
export default {
  components: {
    App
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
