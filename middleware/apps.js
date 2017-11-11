export default async function ({ store, app }) {
  const apps = await app.$axios.$get('/apps/get')
  store.commit('apps/set', apps)
}
