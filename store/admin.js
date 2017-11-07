export const state = () => ({
  admin: {}
})

export const getters = {
  get: (state, getters, parent) => {
    const res = {
      isAdmin: parent.auth.isAdmin,
      editing: parent.auth.editing
    }
    return res
  }
}

export const actions = {
  async edit ({commit, rootGetters}) {
    const doc = await this.$axios.$get('/users/editing')
    commit('set', doc, {root: true})
  }
}
