<script setup>
  import { ref } from 'vue';
  
  const passwordLength = ref(12)
  const includeUppercase = ref(true)
  const includeNumbers = ref(true)
  const includeSymbols = ref(true)
  const generatedPassword = ref('')

  const generatePassword = () => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = includeUppercase.value ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  : "";
  const numberChars = includeNumbers.value ? "0123456789" : "";
  const symbolChars = includeSymbols.value ? "!@#$%^&*()_+[]{}|;:,.<>?/~`" : "";

  const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

  let password = "";
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  generatedPassword.value = password;
};
</script>

<template>
  <div class="password-generate-container">
    <h2 class="password-generator-title">Password Generator</h2>
    <label for="lenght">Password Lenght</label>
    <input type="number" id="lenght" v-model="passwordLength" min="4" max="30">
    <br>

    <label for="uppercase">Include uppercase: </label>
    <input type="checkbox" id="uppercase" v-model="includeUppercase">
    <br>

    <label for="numbers">Include numbers: </label>
    <input type="checkbox" id="numbers" v-model="includeNumbers">
    <br>

    <label for="symbols">Include symbols </label>
    <input type="checkbox" id="symbols" v-model="includeSymbols">
    <br>

    <button @click="generatePassword" class="generated-button">Generate Passoword!</button>

    <div v-if="generatedPassword" class="generated-password">
      <strong>Your password: {{generatedPassword}}</strong>
    </div>
  </div>
</template>

<style scoped>
.password-generate-container {
  min-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.password-generator-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input[type="number"], input[type="checkbox"] {
  margin-left: 10px;
}

.generated-button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
}

.generated-button:hover {
  background-color: #0056b3;
}

.generated-password {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
}
</style>