<script setup>
  import { defineProps, toRefs, computed } from 'vue';

  const props = defineProps({
    title: String,
    description: String,
    id: Number,
    amount: [Number, String]
  })

  const emit = defineEmits(["remove"])

  const { title, description, id, amount } = toRefs(props)

   // Definir el formateador de moneda para pesos colombianos
  const currencyFormatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });

  const remove = () => {
    emit("remove", id.value)
  }

  const amountCurrency = computed(() => currencyFormatter.format(amount.value));

  const isNegative = computed(() => amount.value < 0);
</script>


<template>
  <div class="movement">
    <div class="content">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <div class="action">
      <img src="@/assets/trash-icon.svg" alt="borrar" @click="remove" />
      <p
        :class="{
          red: isNegative,
          green: !isNegative,
        }"
      >
        {{ amountCurrency }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: var(--color-background);
  border-radius: 8px;
  box-sizing: border-box;
}

.movement .content {
  width: 100%;
}

.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}

h4,
p {
  margin: 0;
  padding: 0;
}

p{
  min-width: 100px;
}

h4 {
  margin-bottom: 8px;
}

.movement .action img {
  margin-bottom: 16px;
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>
