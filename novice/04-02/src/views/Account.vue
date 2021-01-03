<template>
  <div class="account">
    <Navbar/>
    <h1>This is an account page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Account',
  components: {
    Navbar
  }
}
</script>
