<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <h1>This is a home page</h1> -->
    <h1>List Post</h1>
    <ul class="list" v-for="(post,index) in postLimitByFive" :key="index">
      <li><router-link :to="`post/${post.id}`">{{ post.title }}</router-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Home",
    data: () => {
        return {
            posts: ""
        }
    },
    computed: {
      postLimitByFive() {
        return this.posts.slice(0,5)
      }
    },
    methods: {
        async getPosts() {
        try { 
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
          this.posts = res.data;
        } catch(error){
          console.log(error);
        }
      },
    },
    created(){
      this.getPosts();
    }
}
</script>

<style scoped>
  .list {
    list-style-type: none;
  }
</style>