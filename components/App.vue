<template lang="html">
  <a class="card flex p-5 app" :href="page">
    <div ref="image" class="image" :style="{'background-image': `url('${data.icon}')`}"></div>
    <div class="content">
      <div class="h6 mb-3"><strong>{{data.name}}</strong></div>
      <div class="shadow"></div>
      <div class="description">{{data.description}}</div>
    </div>

    <div class="get fill--red center" v-if="admin.editing" @click="remove($event)">delete</div>
    <div class="get fill--blue center" v-else>get</div>
  </a>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    admin () {
      return this.$store.getters['admin/get']
    },
    page () {
      return '/app/' + this.data.uid
    }
  },
  methods: {
    resizeSquare () {
      let d = this.$refs.image
      d.style['padding'] = '0px'
      let h = d.clientHeight
      d.style.flex = 'none'
      this.$refs.image.style['padding'] = h + 'px'
    },
    remove (e) {
      e.preventDefault()
      this.$store.commit('apps/remove', {
        uid: this.data.uid,
        _id: this.data._id
      })
      this.$emit('removed')
    }
  },
  mounted () {
    // this.resizeSquare()
    // window.addEventListener('resize', this.resizeSquare)
  }
}
</script>

<style lang="scss" scoped="">
.content {
  overflow: hidden;
  flex-grow: 1;
  margin: 0 1rem;
  padding-top: 1rem;
}
.get {
    min-width: 4rem !important;
    font-size: 0.8rem;
    padding: 0.3rem;
    border-radius: 5rem;
    text-transform: uppercase;
}
.description{
  font-size: .8rem;
  height: 2.5rem;
}
.shadow {
    box-shadow: 0px -5px 11px 12px white;
    position: absolute;
    width: 100%;
    left: 5.5rem;
    top: 100%;
}
.image {
  padding: 2rem;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
