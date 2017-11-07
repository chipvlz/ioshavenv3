<template lang="html">
  <div class="wrapper">
    <div class="banner">

      <div class="installs">
        <div class="get fill--white center dark">Install</div>
        <div class="get fill--white center dark">Download</div>
      </div>
      <div class="shadow"></div>
    </div>
    <div class="bar card flex">

      <div class="title m-3">
        <h4>{{app.name}}</h4>
      </div>

      <div class="info">
        <div class="data card">
          <div class="number">{{bigInt(app.downloads || 0)}}</div>
          <div class="label">Downloads</div>
        </div>
        <div class="data card">
          <div class="number">{{bigInt(app.views || 0)}}</div>
          <div class="label">Views</div>
        </div>
        <div class="data card">
          <div class="number">{{bigInt(app.size || 0)}}</div>
          <div class="label">Size</div>
        </div>
      </div>



    </div>


  </div>
</template>

<script>
export default {
  async asyncData ({params, store}) {
    store.commit('apps/uid', params.uid)
    let data = await store.getters['apps/get']
    return { app: data }
  },
  validate ({params, store}) {
    store.commit('apps/uid', params.uid)
    return store.getters['apps/get']
  },
  methods: {
    bigInt (val) {
      if (val > 999) return (val / 1000).toFixed(1) + 'k'
      else if (val > 999999) return (val / 1000000).toFixed(1) + 'm'
      else return val
    }
  }
}
</script>

<style lang="scss" scoped="">
.banner {
    background: rebeccapurple;
    height: 100vh;
    max-height: 250px;
    position: relative;
    overflow: hidden;
}
.get {
    min-width: 7rem !important;
    font-size: 0.8rem;
    padding: 0.5rem;
    border-radius: 5rem;
    text-transform: uppercase;
    display: inline-block;
    margin-left: 0.5rem;
    &:first-of-type {
      margin-left: 0;
    }
}
.title {
  font-weight: bold;
  margin: 0 0.5rem;
}
.installs, .title, .info {
    padding: 0.5rem 0;
}
.bar {
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}
.info {
    margin: 0 0.5rem;
    text-align: center;
}
.installs {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
    width: 100vw;
    text-align: right;
    z-index: 1;
}
.data {
    text-transform: uppercase;
    display: inline-block;
    padding: 0.8rem;
    margin: 0;
    text-align: center;
    width: 5rem;
    margin: 0 0.3rem;
    > * {
      width: 100%;
      text-align: center;
    }
    .number {
      font-weight: 700;
      font-size: 0.9rem;
    }
    .label {
      font-size: 0.54rem;
      margin-top: 0.3rem;
    }
}

.shadow {
    position: absolute;
    bottom: -2rem;
    right: -2rem;
    height: 5rem;
    width: 100vw;
    background: rgba(0, 0, 0, 0.67);
    filter: blur(2rem);
    z-index: 0;
}
</style>
