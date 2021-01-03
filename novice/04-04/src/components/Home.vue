<template>
  <div>
      <h1>Todo List</h1>
      <h2>What is your main focus today?</h2>
      <input type="text" placeholder="New Todo" v-model="newTodo">
      <input type="submit" value="Add" @click="addTodo">
      <ul v-for="(todo, index) in todos" :key="todo.id">
         <li>{{ todo.title }}
             <input type="text" v-model="editText">
             <input type="submit" value="Edit" @click="editTodo(index)">
             <input type="submit" value="Delete" @click="deleteTodo(todo.id)"> 
         </li>
      </ul>
  </div>  
</template>

<script>
import axios from 'axios';

export default {
    data:() => {
        return {
            todos:[],
            newTodo: "",
            editText: "",
            editId: true
        }
    },

    methods: {
        async listTodos() {
            try {
            const response = await axios.get('http://192.168.1.8:3000/tasks');
            this.todos = response.data;
            }
            catch(error) {
                console.log(error);
            }
        },

        async addTodo() {
            try {
                const payloadData = {
                    title: this.newTodo
                };
                await axios.post('http://192.168.1.8:3000/task/add', payloadData);
                this.listTodos();
            } catch(error) {
                console.log(error);
            }
        },

        async deleteTodo(id) {
            try {
                await axios.delete('http://192.168.1.8:3000/task/delete/' + id);
                this.listTodos();
            } catch(error) {
                console.log(error);
            }
        },

        editTodo(index) {
            this.editText = this.todos[index].title;
        }
    },

    created() {
        this.listTodos();
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>