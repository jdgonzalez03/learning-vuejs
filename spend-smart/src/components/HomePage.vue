<script setup>
  import { computed, onMounted, ref } from 'vue'
  import HeaderPage from './HeaderPage.vue'
  import LayoutScreen from './LayoutScreen.vue'
  import Resume from './Resume/ResumeIndex.vue'
  import HistoryMovements from './Movements/HistoryMovements.vue'
  import AddAction from './AddAction.vue'
  import GraphicMovements from './Resume/GraphicMovements.vue'

  const amount = ref(null)
  const label = ref(null)
  const movements = ref([])

const amounts = computed(() => {
  const today = new Date();
  const oldDate = today.setDate(today.getDate() - 30);

  const lastDays = movements.value
    .filter(m => m.time > oldDate)
    .map(m => Number(m.amount)); // Convertir a número si 'amount' es un string

  return lastDays.map((m, i) => {
    const lastMovements = lastDays.slice(0, i);
    return lastMovements.reduce((suma, movement) => suma + movement, 0);
  });
});

const handleCreate = (movement) => {
  movements.value.push(movement)
  save()
}

const handleRemove = (id) => {
  const index = movements.value.findIndex(m => m.id === id)
  movements.value.splice(index, 1);
  save()
}

const save = () => {
  localStorage.setItem('movements', JSON.stringify(movements.value))
}

onMounted(()=>{
  const movementsFromLocalStorage = JSON.parse(localStorage.getItem('movements'))
  if (Array.isArray(movementsFromLocalStorage)){
    movements.value = movementsFromLocalStorage.map(m => {
    return { ...m, time: new Date(m.time)}
  })
  }
})
</script>
<template>
  <LayoutScreen>
    <template #header>
      <HeaderPage />
    </template>

    <template #resume>
      <Resume :total-label="'Ahorro total'" :label="label" :amount="amount" :total-amount="1200000">
        <template #graphic>
          <GraphicMovements :amounts="amounts" />
        </template>
        <template #action>
          <AddAction @create="handleCreate" />
        </template>
      </Resume>
    </template>

    <template #movements>
      <HistoryMovements 
        :movements="movements"
        @remove="handleRemove"  
      />
    </template>
  </LayoutScreen>
</template>
