import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // store state
  state: {
    count: 0,
    users: [],
    class: []
  },
  // untuk mengganti state di store
  mutations: {
    // method untuk increment value properti dari count
    increment (state) {
      state.count++
    },
    // method untuk decrement value properti dari count
    decrement (state) {
      state.count--
    },
    // method untuk mendapatkan value dari properti users
    getUsers (state, data) {
      state.users = data;
    },

    updateClassData (state, data) {
      state.class = data;
    }
  },
  // untuk menghitung state yang diturunkan dari store state
  getters: {
    getUpUsers: state => {
      return state.users.filter(item => item.id <= 10)
    }
  },
  // actions mengkomit mutations, dapat berisi operasi asynchronous
  actions: {
    increment (context) {
      context.commit('increment')
    },
    
    decrement (context) {
      context.commit('decrement')
    },

    async users({commit}) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = response.data;
        commit('getUsers', data);
      } catch (error) {
        console.log(error);
      }
    },

    updateClassData (context) {
      context.commit('getClass')
    }
  },
  modules: {
  }
})
