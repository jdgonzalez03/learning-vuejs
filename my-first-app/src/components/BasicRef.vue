<script setup>
  import {ref, onMounted} from 'vue'

  const myRef = ref(null)
  onMounted(()=>{
    console.log(myRef.value)
    myRef.value.focus()
  })
  const myfunction = (el) => {
    console.log(el.textContent)
    el.textContent = 'Now is different'
    el.style.color = 'red'
  }
</script>

<template>
  <h4>Example</h4>
  <div>
    <input type="text" placeholder="Enter something..." ref="myRef" >
  </div>

  <h4>Another exmple</h4>
  <div>
    <p :ref="myfunction" >Hola esto es como pasar funciones</p>
  </div>
</template>
