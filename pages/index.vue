<template>
  <section class="container">
    <particles/>
    <div class="wrapper centeronpage">
      <div id="logo" class=""></div>
      <h1 class="title">
        iOS Haven
      </h1>
      <h2 class="subtitle mt-1">
        DOWNLOAD IPAS, SIGNED APPS, APPLE DEVELOPER BETAS, AND JAILBREAKS.
      </h2>
      <div class="links">
        <a href="#menu" class="fill--white p1 pr2 pl2 m-3 dark" @click="launch">Launch</a>
        <a href="/docs" target="_blank" class="fill--white p1 pr2 pl2 m-3 dark">Docs</a>
      </div>
    </div>
  </section>
</template>

<script>
import Particles from '~/components/Particles.vue'
export default {
  components: {
    Particles
  },
  methods: {
    launch () {
      window.dispatchEvent(new Event('toggleSidebar'))
    }
  }
}
</script>

<style lang="scss">

#logo {
  background-image: url('/logo.svg');
  background-repeat: no-repeat;
  background-position: center;
  padding: 7rem;
  @media (max-width: 500px) {
    padding: 4rem;
  }
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 600;
  font-size: 5rem;
  margin: 2rem 0 1rem;
  color: white;
  letter-spacing: 1px;
  @media (max-width: 500px) {
    font-size: 2rem;
    margin: 1rem 0;
  }
}
.centeronpage {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
