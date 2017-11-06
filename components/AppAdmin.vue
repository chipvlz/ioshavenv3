<template lang="html">
<div class="card flex">
<square-button v-if="!admin.editing" label="edit" icon="fas fa-pencil" class="fill--blue" @click.native="edit"/>
<square-button v-else="" label="done" icon="fas fa-check" class="fill--blue" @click.native="edit"/>
</div>
</template>

<script>
import SquareButton from '~/components/ui/SquareButton'
export default {
  components: {
    SquareButton
  },
  computed: {
    auth () {
      return this.$store.getters.auth
    },
    admin () {
      return this.$store.getters['admin/get']
    }
  },
  methods: {
    edit () {
      this.$store.dispatch('admin/edit')
    }
  }
}
</script>

<style lang="scss" scoped="">

</style>
