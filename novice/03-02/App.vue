<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <front message="Halo Dunia!"></front>
    <h1>Ini state : {{ state }}</h1>
    <h1>Ini computed : {{ getName }}</h1>
    <p v-if="show">Nama : {{ people.name }}</p>
    <p>Umur : {{ people.age }}</p>
    <button v-on:click="changeName">Change name</button>
    <p>Daftar Kelas :</p>
    <p v-for="k in classes" :key="k">{{ k }}</p>
    <p>Nilai awal : </p>
    <front v-bind:countku="count"></front>
    <button class="btn" v-on:click="count++">Increment</button>
    <button class="btn" v-on:click="count--">Decrement</button>
  </div>
</template>

<script>
import Front from './components/Front.vue'

export default {
  name: 'App',
  components: {
    Front
  },

  data: () => {
    return {
      state: 'State',
      show: true,
      people: {
        name: 'Ali',
        age: 21
      },
      classes: ['Vue', 'Node', 'React Native'],
      count: 0
    }
  },

  computed: {
    getName() {
      return this.people.name;
    }
  },

  methods: {
    changeName() {
      this.people.name = 'Ahmad'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn{
  margin: 10px;
}
</style>
