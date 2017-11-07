export const state = () => ({
  apps: [],
  current: {}
})

export const getters = {
  get: state => {
    if (state.current.uid) {
      return state.apps.find(app => {
        return app.uid === state.current.uid
      })
    } else return state.apps
  }
}

export const mutations = {
  set (state, val) {
    state.apps = val
  },
  add (state, val) {
    state.apps.push(val)
  },
  uid (state, val) {
    state.current.uid = val
  }
}

export const actions = {
  async add ({commit, rootGetters}) {
    const doc = await this.$axios.$post('/apps/modify')
    commit('add', doc)
  }
}
