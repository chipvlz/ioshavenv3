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
  // async nuxtServerInit ({ commit }, { req, app }) {
  //   const auth = await app.$axios.$get('/users/auth')
  //   const apps = await app.$axios.$get('/apps/get')
  //   commit('set', auth)
  //   commit('apps/set', apps)
  // }
}

export const getters = {
  auth: state => {
    return state.auth
  }
}
