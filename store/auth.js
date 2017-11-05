export const state = () => ({
  auth: {}
})

export const mutations = {
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

// export const actions = {
//   nuxtServerInit({ commit }, { req }) {
//     commit('set_auth', 'req.session.authUser')
//   }
// }
