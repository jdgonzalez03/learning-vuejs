<script setup>
  import { defineProps, toRefs } from 'vue';
  import MovementItem from './MovementItem.vue';
  const props = defineProps({
    movements:{
      type: Array,
      default: () => [],
    }
  })

  const emit = defineEmits(['remove'])

  const { movements} = toRefs(props)
  const handleRemove = (id) =>{
    emit('remove', id)
  }

</script>
<template>
  <section>
    <h2 class="title">Historial</h2>
    <div class="content">
      <MovementItem 
        v-for="{id, title, description, amount} in movements" 
        :key="id" 
        :id="id"
        :title="title"
        :description="description"
        :amount="amount"
        @remove="handleRemove"
      /> 
    </div>
  </section>
</template>

<style scoped>
.movements {
  max-height: 100%;
  padding: 0 8px;
  margin-bottom: 14px;
}

.title {
  margin: 8px 16px 24px 16px;
  color: var(--brand-blue);
}

.content {
  max-height: 68vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}
</style>