<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/chats">Chats</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
  <RouterView/>
</template>

<style></style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

a.router-link-exact-active {
  color: var(--color-text);
}

a.router-link-exact-active:hover {
  background-color: transparent;
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

a:first-of-type {
  border: 0;
}

</style>
