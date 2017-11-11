export default async function ({ store, app }) {
  const auth = await app.$axios.$get('/users/auth')
  store.commit('set', auth)
}
