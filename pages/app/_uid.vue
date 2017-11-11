<template lang="html">
  <div class="wrapper uidpage">
    <div class="banner" :style="{'background-image': `url('${app.banner}')`}">
      <div class="icon" :style="{'background-image': `url('${app.icon}')`}"></div>
      <div class="installs">
        <a class="get fill--white center dark" :href="api + 'apps/install/' + app.uid" >Install</a>
        <a class="get fill--white center dark" :href="api + 'apps/install/' + app.uid" >Download</a>
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



    <app-admin v-if="!!auth.isAdmin" :app="app"/>

    <div class="card" v-if="!!auth.editing">
      <div class="field">
        <div class="h5 mb-5">Name</div>
        <input type="text" v-model="app.name" class="fancy">
      </div>
      <div class="field">
        <div class="h5 mb-5">Version</div>
        <input type="text" v-model="app.version" class="fancy">
      </div>
      <div class="field">
        <div class="h5 mb-5">Icon</div>
        <input type="text" v-model="app.icon" class="fancy">
      </div>
      <div class="field">
        <div class="h5 mb-5">Banner</div>
        <input type="text" v-model="app.banner" class="fancy">
      </div>
      <div class="field">
        <div class="h5 mb-5">Description</div>
        <textarea rows="8" v-model="app.description" class="fancy"></textarea>
        <!-- <editor @save="saveDescription"/> -->
      </div>
      <div class="field">
        <div class="h5 mb-5">Unsigned</div>
        <input type="text" v-model="app.unsigned" class="fancy">
      </div>
      <div class="field">
        <div class="h5 mb-5">Signed</div>
        <input type="text" v-model="app.signed" class="fancy">
      </div>
      <div class="field">
        <div class="h5 mb-5">Tags</div>
        <input type="text" v-model="app.tags" class="fancy">
      </div>
    </div>


    <div class="card" v-if="!auth.editing">
      <div class="markdown" v-html="descriptionHTML"></div>
    </div>
    <div class="card flex tags" v-if="app.tags">
      <div class="tag" v-for="tag in tags">{{tag}}</div>
    </div>

  </div>
</template>

<script>
import Editor from '~/components/Editor.vue'
import SquareButton from '~/components/ui/SquareButton'
import AppAdmin from '~/components/AppAdmin.vue'
import marked from 'marked'
import config from '~/nuxt.config.js'
export default {
  middleware: ['authenticate', 'apps'],
  components: {
    Editor,
    SquareButton,
    AppAdmin
  },
  async asyncData ({params, store, app}) {
    store.commit('apps/uid', params.uid)
    let data = await store.getters['apps/get']
    app.$axios.$get('/apps/get/' + params.uid)
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
  },
  computed: {
    auth () {
      return this.$store.getters.auth
    },
    admin () {
      return this.$store.getters['admin/get']
    },
    descriptionHTML () {
      marked.setOptions({
        sanitize: true,
        smartypants: true
      })
      return marked(this.app.description)
    },
    api () {
      return config.env.api
    },
    tags () {
      return (this.app.tags) ? this.app.tags.split(',') : []
    }
  }
}
</script>

<style lang="scss" scoped="">
.uidpage {
  @media (max-width: 500px) {
    margin-top: -2rem;
  }
}
.banner {
    background: rebeccapurple;
    height: 100vh;
    max-height: 250px;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.icon {
    padding: 2.5rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    border: 1px solid white;
    border-radius: 1rem;
    background-position: center;
    background-size: cover;
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
    @media (max-width: 500px) {
      justify-content: center;
    }
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
    width: 200vw;
    background: rgba(0, 0, 0, 0.67);
    filter: blur(2rem);
    z-index: 0;
}
.tags {
    flex-wrap: wrap;
    justify-content: space-around;
}
.tag {
    padding: 0.3rem 1rem;
    border: 1px solid #ccc;
    margin: 0.3rem;
    border-radius: 50rem;
    flex-grow: 1;
    text-align: center;
}
</style>
