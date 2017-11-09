<template>
  <div>
    <nuxt id="content"/>
    <sidebar color="#F44336" title="iOS Haven">
      <a href="/profile" slot="links" class="mr-5">
        <square-button icon="fas fa-user" class="fill--white dark"/>
      </a>
      <!-- <a href="/auth" slot="links"><i class="fas fa-user"></i></a> -->
      <div slot="content">
        <a href="/" class="item"><i class="fas fa-home"></i>Home</a>
        <a href="/apps" class="item"><i class="fab fa-app-store"></i>Apps</a>
        <a href="/credits" class="item"><i class="fas fa-code"></i>Credits</a>
      </div>
    </sidebar>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import SquareButton from '~/components/ui/SquareButton'
export default {
  components: {
    Sidebar,
    SquareButton
  }
}
</script>

<style lang="scss">
@import "~assets/variables.scss";
@import "~assets/main.scss";
#__nuxt {
  margin-top: 4rem;
  padding: 2rem 1rem;
  max-width: 100vw;
  max-height: 100vh;
  @media (max-width: 500px) {
    padding: 1.6rem 0;
  }
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
