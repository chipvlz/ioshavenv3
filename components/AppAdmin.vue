<template lang="html">
<div class="card flex">

<!-- P R E V I E W   M O D E -->
<square-button v-if="!auth.editing" label="edit" icon="fas fa-pencil" class="fill--blue" @click.native="edit"/>
<square-button v-if="!auth.editing" label="publish" icon="fas fa-globe" class="fill--blue"/>

<!-- E D I T   M O D E -->
<square-button v-if="auth.editing" label="done" icon="fas fa-check" class="fill--blue" @click.native="edit"/>
<square-button v-if="auth.editing" label="add" icon="fas fa-plus" class="fill--blue" @click.native="add"/>
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
    },
    add () {
      this.$store.dispatch('apps/add')
    }
  }
}
</script>

<style lang="scss" scoped="">

</style>
