export const state = () => ({
  apps: [],
  current: {},
  newest: {}
})

export const getters = {
  get: state => {
    if (state.current.uid) {
      return state.apps.find(app => {
        return app.uid === state.current.uid
      })
    } else return state.apps
  },
  newest: state => {
    return state.newest
  }
}

export const mutations = {
  set (state, val) {
    state.apps = val
  },
  add (state, val) {
    state.apps.push(val)
    state.newest = val
  },
  uid (state, val) {
    state.current.uid = val
  },
  update (state, val) {
    let i = state.apps.findIndex(app => {
      return app.uid === state.current.uid
    })
    Object.keys(val).forEach(key => {
      state.apps[i][key] = val[key]
    })
  },

  remove (state, val) {
    let i = state.apps.findIndex(app => {
      return app.uid === val.uid
    })
    state.apps.splice(i, 1)
    this.$axios.post('/apps/remove', {_id: val._id})
  },

  mongo (state) {
    let i = state.apps.find(app => {
      return app.uid === state.current.uid
    })
    this.$axios.$post('/apps/update', {
      data: i
    }).then(doc => {
      console.log(i, doc)
    })
  }
}

export const actions = {
  async add ({commit, rootGetters}) {
    const doc = await this.$axios.$post('/apps/modify')
    commit('add', doc)
  }
}
