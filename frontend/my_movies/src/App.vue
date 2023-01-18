<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">

    </a>
    <a href="https://vuejs.org/" target="_blank">

    </a>
  </div>
  <register/>


  <nav>

    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Movies</router-link>
  </nav>
  <router-view/>
</template>

<script setup>
    import Register from "./vue/my_register.vue";
    import login from "./vue/my_login.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
