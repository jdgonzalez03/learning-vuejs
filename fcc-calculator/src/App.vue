<script setup>
import { ref } from 'vue'

const expression = ref('')
const answer = ref('')

const clear = () => {
  expression.value = '0'
  answer.value = ''
}

const sign = () => {
  if (answer.value === "") return;
  answer.value = answer.value.toString().charAt(0) === "-" ? answer.value.slice(1) : "-" + answer.value
}

const percent = () => {
  if (answer.value === '') return
  answer.value = `${parseFloat(answer.value) / 100}`
}

const isOperator = (symbol) => {
  return /[*/+-]/.test(symbol)
}

const append = (symbol) => {
  //Agregando operadores
  if (isOperator(symbol)) {
    const history = expression.value.trim()
    expression.value = history + ' ' + symbol + ' '
  } else if (symbol === '0') {
  //Agrega simbolo o numero
    if (expression.value.charAt(0) !== '0') {
      expression.value = expression.value + symbol
    }
  } else if (symbol === '.') {
  //Validando el decimal
    const lastNumber = expression.value.split(/[-+/*]/g).pop()

    if (!lastNumber) return

    // Si el ultimo numero ya tiene algun decimal, no agregar otro
    if (lastNumber?.includes('.')) return
    expression.value = expression.value + symbol
  } else {
    //Evita agregar muchos ceros al inicio
    if (expression.value.charAt(0) === "0") {
      expression.value = expression.value.slice(1) + symbol
    } else {
      expression.value = expression.value + symbol
    }
  }
}

const equals = () => {
  const history = expression.value.trim()

  if (isOperator(history.charAt(history.length - 1))) return;
  
  const parts = history.split(" ");
  const newParts = [];

  for (let i = parts.length - 1; i >= 0; i--) {
      if (["*", "/", "+"].includes(parts[i]) && isOperator(parts[i - 1])) {
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i - 1;
        while (isOperator(parts[k])) {
          k--;
          j++;
        }
        i -= j;
      } else {
        newParts.unshift(parts[i]);
      }
    }

    const newExpression = newParts.join(" ");
    if (isOperator(newExpression.charAt(0))) {
      answer.value = eval(answer.value + newExpression) 
    } else {
      answer.value = eval(newExpression)
    }
    expression.value = ""
}
</script>

<template>
  <main>
    <div class="calculator">
      <div id="display" class="display">
        <div  class="output-screen">{{ answer }}</div>
        <div class="formula-screen">{{ expression }}</div>
      </div>
      <button id="clear" @click="clear" class="btn btn-gray">AC</button>
      <button id="clear" @click="sign" class="btn btn-gray">+/-</button>
      <button id="percent" @click="percent" class="btn btn-gray">%</button>
      <button id="divide" @click="append('/')" class="btn btn-orange">/</button>
      <button id="seven" @click="append('7')" class="btn btn-number">7</button>
      <button id="eight" @click="append('8')" class="btn btn-number">8</button>
      <button id="nine" @click="append('9')" class="btn btn-number">9</button>
      <button id="multiply" @click="append('*')" class="btn btn-orange">*</button>
      <button id="four" @click="append('4')" class="btn btn-number">4</button>
      <button id="five" @click="append('5')" class="btn btn-number">5</button>
      <button id="six" @click="append('6')" class="btn btn-number">6</button>
      <button id="add" @click="append('+')" class="btn btn-orange">+</button>
      <button id="one" @click="append('1')" class="btn btn-number">1</button>
      <button id="two" @click="append('2')" class="btn btn-number">2</button>
      <button id="three" @click="append('3')" class="btn btn-number">3</button>
      <button id="subtract" @click="append('-')" class="btn btn-orange">-</button>
      <button id="zero" @click="append('0')" class="btn btn-number">0</button>
      <button id="decimal" @click="append('.')" class="btn btn-number">.</button>
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

.formula-screen{
  font-size: 32px;
  color: gray;
}

.display div {
  overflow: hidden;
  text-overflow: ellipsis;
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
