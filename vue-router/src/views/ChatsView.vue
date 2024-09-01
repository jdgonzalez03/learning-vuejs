<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute()
const chats = ref([
  { id: 1, name: 'Ximena' },
  { id: 2, name: 'Daniel' },
  { id: 3, name: 'Miguel' }
])
</script>

<template>
  <div>
    <aside>
      <div v-for="chat in chats" :key="chat.id">
        <RouterLink :to="`/chats/${chat.id}`">
          {{ chat.name }}
        </RouterLink>
      </div>
    </aside>

    <article>
      Info from $route {{  route }}
    </article>

    <article>
      <RouterView />
    </article>
  </div>
</template>
