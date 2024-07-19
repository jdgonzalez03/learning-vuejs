<script setup>
  const urlVideo= "https://www.youtube.com/watch?v=pgWZLS75Nmo&t=1161s&ab_channel=HuXnWebDev"

  const urlImageElonMusk = "https://i.insider.com/625839ec8b169c0018f36fba?width=1300&format=jpeg&auto=webp"

  const altText = "Elon Musk"
</script>

<template>
  <a :href="urlVideo" target="_blank" rel="noopener noreferrer"> This is a link to video tutorial about VueJS using binding attributes</a>
  <br>
  <img :src="urlImageElonMusk" :alt="altText" width="450" height="300">
</template>