<template>
  <nav>
    <v-app-bar>
       <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Praxis Academy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded color="primary" dark small>
        <span>Logout</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{  item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data: () => {
      return {
        drawer: false,
        items: [
          {title: 'Home', icon: 'mdi-view-dashboard', route: '/'},
          { title: 'My Account', icon: 'mdi-account', route: '/account' },
          {title: 'About', icon: 'mdi-forum', route: '/about'}
          ]
      }
    }
  }
</script>