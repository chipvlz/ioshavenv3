<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title mt1">
        beta.ioshaven.co
      </h1>
      <h2 class="subtitle mt-1">
        Nuxt.js project
      </h2>
      <div class="links">
        <a href="#menu" class="fill--white p1 pr2 pl2 m-3 dark" @click="launch">Launch</a>
        <a href="/docs" target="_blank" class="fill--white p1 pr2 pl2 m-3 dark">Docs</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'
export default {
  components: {
    Logo
  },
  methods: {
    launch () {
      window.dispatchEvent(new Event('toggleSidebar'))
    }
  },
  mounted () {
    axios.request({
      baseURL: 'http://localhost:8000/',
      method: 'get',
      url: '/users/auth',
      withCredentials: true,
      responseType: 'json'
    }).then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 2rem;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1rem;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
