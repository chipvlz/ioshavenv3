<template lang="html">
  <div class="card flex p-5 app">
    <div ref="image" class="image"></div>
    <div class="content">
      <div class="h6 mb-3"><strong>app name</strong></div>
      <div class="shadow"></div>
      <div class="description">mmmmmmmmmmmmmmm aaaaaaaaaaaaaaaaaaaaa</div>
    </div>
    <div class="get fill--blue center">
      get
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resizeSquare () {
      let d = this.$refs.image
      d.style['padding'] = '0px'
      let h = d.clientHeight
      d.style.flex = 'none'
      this.$refs.image.style['padding'] = h + 'px'
    }
  },
  mounted () {
    // this.resizeSquare()
    // window.addEventListener('resize', this.resizeSquare)
  }
}
</script>

<style lang="scss" scoped="">
.app {
  height: 5rem;
  position: relative;
  width: 300px;
  flex-grow: 1;
  margin: 0.3rem;
  justify-content: space-between;
  align-items: center;
}
.content {
  overflow: hidden;
  flex-grow: 1;
  margin: 0 1rem;
}
.get {
    min-width: 3.2rem !important;
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
  background: #aaa;
  padding: 2rem;
}
</style>
