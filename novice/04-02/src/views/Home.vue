<template>
  <div class="home">
    <Navbar/>
    <h1>This is a home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
