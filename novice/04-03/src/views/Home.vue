<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Learn Vuex</h1>
    <!-- Button untuk increment dan decrement value dari count -->
    <button @click="addCount">Increment</button> |
    <button @click="subtractCount">Decrement</button>
    <!-- Untuk mendapatkan value dari store state count  -->
    <p>{{ $store.state.count }}</p>
    <!-- Perulangan untuk mengulang value dari store state users berdasarkan nama dari user -->
    <ul v-for="user in $store.state.users" :key="user.name">
      <li>{{ user.name }}</li>
    </ul>
    <!-- <li>{{ $store.state.users }}</li> -->
    <input :value="classData" @input="updateClassData">
    <p>{{ $store.state.class }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    
  },

  computed: {  
    ...mapState({
      classData: state => state.class
    })
  },

  methods: {
    // method yang digunakan untuk mengambil store yang dikirimkan dari actions
    addCount() {
      this.$store.dispatch('increment')
    },

    subtractCount() {
      this.$store.dispatch('decrement')
    },

    getUsers(){
      this.$store.dispatch('users')
    },

    updateClassData (e) {
      this.$store.commit('updateClassData', e.target.value)
    }
  },
  // method untuk membuat instance
  created() {
    this.getUsers();
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>