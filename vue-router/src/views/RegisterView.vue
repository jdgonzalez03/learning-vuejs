
<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden')
    return
  }
  console.log('Username:', username.value)
  console.log('Email:', email.value)
  console.log('Password:', password.value)
}
</script>

<template>
  <div class="register-container">
    <h3>REGISTER</h3>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Nombre de Usuario</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Ingresa tu nombre de usuario"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Ingresa tu email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirm-password"
          v-model="confirmPassword"
          placeholder="Confirma tu contraseña"
          required
        />
      </div>

      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>


<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 3px;
  background-color: #28a745;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
