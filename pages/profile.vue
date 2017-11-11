<template lang="html">
  <div class="wrapper mobile">
    <div v-if="user.username">
      <div class="card">
        <div class="field">
          <h3>Hey, <strong class="ml-2">{{user.username}}</strong></h3>
        </div>
      </div>
    </div>

    <auth/>
  </div>
</template>

<script>
import Auth from '~/components/Auth.vue'
// import axios from 'axios'
export default {
  middleware: 'authenticate',
  components: {
    Auth
  },
  computed: {
    user () {
      return this.$store.getters.auth
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
