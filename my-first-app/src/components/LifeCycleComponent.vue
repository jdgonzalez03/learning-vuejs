<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

const message = ref('Hello, Vue!')

onBeforeMount(()=>{
  console.log('Se ejecuta antes de ser montado el componente')
})

onMounted(()=>{
  console.log('El componente ha sido montado')
})

onBeforeUpdate(()=>{
  console.log('El componente esta por cambiar')
})

onUpdated(()=>{
  console.log('He sido actualizado')
})


const updateMessage = () => {
  message.value = 'He sido cambiado'
}

onBeforeUnmount(() => {
  console.log('Component is about to be unmounted')
})

onUnmounted(() => {
  console.log('Component has been unmounted')
})


</script>

<template>
  <h4>LifeCycleComponent</h4>
  <p>Check the console</p>
  <p>{{message}}</p>
  <button @click="updateMessage">Update the message</button>
</template>
