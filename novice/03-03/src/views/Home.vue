<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <LifeCycle life="life-cycle"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LifeCycle from '@/components/LifeCycle.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    LifeCycle
  }
}
</script>
