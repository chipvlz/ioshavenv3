<template lang="html">
<div class="card flex">

<!-- P R E V I E W   M O D E -->
<square-button v-if="!auth.editing" label="edit" icon="fas fa-pencil" class="fill--blue" @click.native="edit"/>

<!-- E D I T   M O D E -->
<square-button v-if="auth.editing" label="done" icon="fas fa-check" class="fill--blue" @click.native="done"/>
<square-button v-if="auth.editing" label="add" icon="fas fa-plus" class="fill--blue" @click.native="add"/>
</div>
</template>

<script>
import SquareButton from '~/components/ui/SquareButton'
export default {
  components: {
    SquareButton
  },
  props: ['app'],
  computed: {
    auth () {
      return this.$store.getters.auth
    },
    admin () {
      return this.$store.getters['admin/get']
    },
    apps () {
      return this.$store.getters['apps/get']
    }
  },
  methods: {
    edit () {
      this.$store.dispatch('admin/edit')
    },
    done (exit = true) {
      if (exit) this.$store.dispatch('admin/edit')
      if (this.app) {
        this.$store.commit('apps/update', this.app)
        this.$store.commit('apps/mongo')
      }
    },
    async add () {
      this.done(false)
      await this.$store.dispatch('apps/add')
      let uid = this.$store.getters['apps/newest'].uid
      // console.log(uid)
      window.location.href = '/app/' + uid
      // this.$store.commit('apps/update')
    }
  }
}
</script>

<style lang="scss" scoped="">

</style>
