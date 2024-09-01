<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter()

  const username = ref('')

  const iniciar = () => {
    router.push({
      path: '/chats',
      query:{
        username: username.value
      }
    })
  }
</script>

<template>
  <main>
    <h2>Hola mundo, este es tu dashboard</h2>
    <section>
      <h3>Introduce tu nombre de usuario</h3>
      <input placeholder="username" v-model="username" />
      <button @click="iniciar">Loguear</button>
    </section>
  </main>
</template>
