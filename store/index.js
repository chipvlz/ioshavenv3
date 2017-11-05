export const state = () => ({
  counter: 0,
  auth: {}
})

export const mutations = {
  set (state, obj) {
    state.auth = obj
  },
  increment (state) {
    state.counter++
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, app }) {
    const auth = await app.$axios.$get('/users/auth')
    return commit('set', auth)
  }
}

export const getters = {
  auth: state => {
    return state.auth
  }
}
