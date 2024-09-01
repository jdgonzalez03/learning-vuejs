<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute()
const chats = ref([
  { id: 1, name: 'Ximena' },
  { id: 2, name: 'Daniel' },
  { id: 3, name: 'Miguel' }
])


// watch(
//   () => route.params,
//   (val) => {
//   console.log('update params en chatsview', val);
//   chats.value = [
//     {
//       id: 1,
//       name: 'Ximena'
//     },
//     {
//       id: 2,
//       name: 'Juan'
//     },
//     {
//       id: 3,
//       name: 'Pedro'
//     }
//   ]
// }, { immediate: true })
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
