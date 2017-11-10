<template lang="html">
  <div class="apps wrapper">
    <app-admin v-if="auth.isAdmin" class="m-3"/>

    <div class="card m-3">
      <search-bar :options="searchOptions" :data="apps" class="fancy" @update="updateSearch" ref="search"/>
    </div>


    <app v-for="app in filteredApps" :key="app.name" :data="app" class="m-3" @removed="appRemoved"></app>

    <!-- <div class="card m-3 mt2 fill--blue center">Load more apps.</div> -->
  </div>
</template>

<script>
import App from '~/components/App.vue'
import AppAdmin from '~/components/AppAdmin.vue'
import AppAdd from '~/components/AppAdd.vue'
import SearchBar from '~/components/ui/SearchBar.vue'

export default {
  data () {
    return {
      filteredApps: [],
      searchOptions: {
        alphabetize: 'name',
        property: 'name',
        label: 'Search for apps...',
        filterOnMount: true
      }
    }
  },
  computed: {
    auth () {
      return this.$store.getters.auth
    },
    apps () {
      return this.$store.getters['apps/get']
    }
  },
  components: {
    App,
    AppAdmin,
    AppAdd,
    SearchBar
  },
  methods: {
    updateSearch (val) {
      this.filteredApps = val
    },
    appRemoved () {
      let search = this.$refs.search
      search.filter()
      console.log(search)
      // this.updateSearch(this.filteredApps)
    }
  }
}
</script>

<style lang="scss" scoped="">
.apps {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 1;
}
</style>
