<script setup>
import {ref, computed, defineProps, toRefs} from 'vue'

const props = defineProps({
  chatId: {
    type: String,
    default: ''
  }
})

const {chatId} = toRefs(props)



const messages = ref([
      { id: 1, text: 'Mensaje 1', author: 1 },
      { id: 2, text: 'Mensaje 2', author: 2 },
      { id: 3, text: 'Mensaje 3', author: 3 },
    ])

const messagesFiltered = computed(()=>{
  return messages.value.filter((msg) => {
    return `${msg.author}` === chatId.value
  })})
</script>

<template>
  <div v-for="msg in messagesFiltered" :key="msg.id">
    <hr>
    <h3>
      {{ msg.text }}
    </h3>
  </div>
</template>
