<script setup>
import { marked } from 'marked'
import { toRefs, computed } from 'vue';

// Configuración de `marked`
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  smartLists: true,
  smartypants: false
})

// Definimos las propiedades que recibe el componente
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  }
})

const { text } = toRefs(props)
const previewText = computed(() => marked(text.value));

</script>

<template>
  <div :id="props.id" v-html="previewText" />
</template>
