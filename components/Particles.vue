<template lang="html">
  <div>
    <div id="particles-js"></div>
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
        // let particlesLoad = document.getElementById('particles-js')
        // particlesLoad.style.position = 'absolute'
        // particlesLoad.style.top = '0'
        // particlesLoad.style.left = '0'
        // particlesLoad.style.width = '100%'
        // particlesLoad.style.height = '100%'
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
   position: fixed;
   width: 100%;
   height: 100%;
   z-index: -1;
   top: 0px;
   left: 0px;
 }



 canvas {
   width: 100%;
   height: 100%;
 }
</style>
