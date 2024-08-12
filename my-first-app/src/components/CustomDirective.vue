<script setup>
  const vFormatElement = {
    mounted: (el, binding) =>{
      console.log({el, binding})
      el.style.color = 'blue'
      el.style.fontSize = `${binding.value}em`
    }
  }
</script>
<template>
  <h4>Example</h4>
  <div v-format-element="4">Magna labore amet laboris Lorem proident ea.</div>
</template>