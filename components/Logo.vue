<template lang="html">
  <div>
    <div id="particles-js"></div>
    <div id="logo" class="p7 mt9"></div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [{src: '/particles.min.js'}]
    }
  },
  mounted () {
    window.onload = function () {
      window.particlesJS.load('particles-js', '/particles-js.json', function () {
        let particlesLoad = document.getElementById('particles-js')
        particlesLoad.style.position = 'absolute'
        particlesLoad.style.top = '0'
        particlesLoad.style.left = '0'
        particlesLoad.style.width = '100%'
        particlesLoad.style.height = '100%'
      })
    }
  }
}
</script>
<!-- <script src="/particles.min.js"></script>

<script> particlesJS.load('particles-js', '/particles-js.json', function() {
  console.log('callback - particles.js config loaded');
});></script> -->
<style lang="css" scoped>
 #particles-js {
   background-color: #21b7d7;
   z-index: -1;
 }

 #logo {
   background-image: url('/logo.svg');
   background-repeat: no-repeat;
   background-position: center;

 }
</style>
