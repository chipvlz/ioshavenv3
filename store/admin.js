export const state = () => ({
  editing: false
})

export const getters = {
  get: state => {
    return state
  }
}

export const mutations = {
  toggleEdit (state) {
    state.editing = !state.editing
  }
}

export const actions = {
  edit (context) {
    context.commit('toggleEdit')
  }
}
