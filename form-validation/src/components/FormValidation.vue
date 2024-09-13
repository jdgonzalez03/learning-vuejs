<script setup>
  import {ref, computed} from 'vue'

  const formData = ref({
    name: '',
    password: '',
    email: ''
  })

  const isNameValid = computed(()=> formData.value.name.trim() !== '')
  //Usando expresiones regulares
  const isEmailValid = computed(() =>  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) 
  const isPasswordValid = computed(() => formData.value.password.length > 8)
  const isFormValid = computed(() => isEmailValid.value && isPasswordValid.value && isNameValid.value)

  const handleForm = () => {
    if (isFormValid.value){
      console.log("it's ok! :)", formData.value)
    } else {
      console.log("Something went wrong, please check the form", formData.value)
    }
  }
</script>

<template>
  <div>
    <h1>Form Validation </h1>
    <form @submit.prevent="handleForm" class="custom-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" v-model="formData.name">
        <span v-if="!isNameValid" class="error">Name is required</span>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="formData.email">
        <span v-if="!isEmailValid" class="error">Email is required</span>
      </div>

      <div class="form-group">
        <label for="password">password:</label>
        <input type="password" name="password" id="password" v-model="formData.password">
        <span v-if="!isPasswordValid" class="error">Password is required</span>
      </div>

      <button class="submit-button" :disabled="!isFormValid">Submit</button>

    </form>
  </div>
</template>

<style scoped>
.custom-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
}

.submit-button {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>