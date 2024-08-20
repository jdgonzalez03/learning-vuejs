<script setup>
import { ref } from 'vue'

const current = ref('')
const previous = ref(null)
const operator = ref(null)
const checkOperator = ref(false)

const percent = () => {
  current.value = `${parseFloat(current.value) / 100}`
}

const sign = () => {
  current.value = current.value.charAt(0) === '-' ? current.value.slice(1) : `-${current.value}`
}

const clear = () => {
  current.value = ''
}

const append = (number) => {
  if (checkOperator.value) {
    current.value = ''
    checkOperator.value = false
  }

  current.value = `${current.value}${number}`
}

const decimal = () => {
  if(current.value.indexOf('.') === -1){
    append('.')
  }
}
const setPrevious = () => {
  previous.value = current.value
  checkOperator.value = true
}

const add = () => {
  operator.value = (a, b) => a + b
  setPrevious()
}

const subtract = () => {
  operator.value = (a, b) => b - a
  setPrevious()
}

const multiply = () => {
  operator.value = (a, b) => a * b
  setPrevious()
}

const divide = () => {
  operator.value = (a, b) => b / a
  setPrevious()
}

const equals = () => {
  current.value = `${operator.value(parseFloat(current.value), parseFloat(previous.value))}`
  previous.value = null
}
</script>

<template>
  <main>
    <div class="calculator">
      <div id="display" class="display">{{ current || 0 }}</div>
      <button id="clear" @click="clear" class="btn btn-gray">AC</button>
      <button id="sign" @click="sign" class="btn btn-gray">+/-</button>
      <button id="percent" @click="percent" class="btn btn-gray">%</button>
      <button id="divide" @click="divide" class="btn btn-orange">/</button>
      <button id="seven" @click="append(7)" class="btn btn-number">7</button>
      <button id="eight" @click="append(8)" class="btn btn-number">8</button>
      <button id="nine" @click="append(9)"  class="btn btn-number">9</button>
      <button id="multiply" @click="multiply" class="btn btn-orange">*</button>
      <button id="four" @click="append(4)"  class="btn btn-number">4</button>
      <button id="five" @click="append(5)"  class="btn btn-number">5</button>
      <button id="six" @click="append(6)"  class="btn btn-number">6</button>
      <button id="add" @click="add" class="btn btn-orange">+</button>
      <button id="one" @click="append(1)"  class="btn btn-number">1</button>
      <button id="two" @click="append(2)"  class="btn btn-number">2</button>
      <button id="three" @click="append(3)"  class="btn btn-number">3</button>
      <button id="subtract" @click="subtract" class="btn btn-orange">-</button>
      <button id="zero" @click="append(0)"  class="btn btn-number">0</button>
      <button id="decimal" @click="decimal" class="btn btn-number">.</button>
      <button id="equals" @click="equals" class="btn btn-orange">=</button>
    </div>
    <p>By <span>jdgonzalez03</span></p>
  </main>
</template>

<style scoped>

main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.display {
  grid-column: 1 / 5;
  text-align: right;
  color: white;
  font-size: 48px;
  padding: 20px 10px;
  box-sizing: border-box;
}

.btn {
  border: 1px solid black;
  text-align: center;
  border-radius: 50%;
  padding: 0.8rem;
  margin: 4px;
  color: white;
  cursor: pointer;
  font-size: 24px;
  height: 70px;
}

.btn-orange {
  background-color: #f39c12;
}

.btn-orange:hover {
  background-color: #e67e22;
}

.btn-gray {
  background-color: #7f8c8d;
  color: black;
}

.btn-gray:hover {
  background-color: #95a5a6;
}

.btn-number {
  background-color: #bdc3c7;
  color: black;
}

.btn-number:hover {
  background-color: #d5dbdb;
}

#zero {
  grid-column: 1 / 3;
  border-radius: 35px;
}

</style>

