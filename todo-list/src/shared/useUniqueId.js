import { ref } from 'vue';

export function useUniqueId() {
  const generatedIds = ref(new Set());

  const generateRandomId = () => {
    let newId;
    do {
      newId = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    } while (generatedIds.value.has(newId));  // Verifica si el ID ya existe
    generatedIds.value.add(newId);  // Añade el ID al conjunto
    return newId;
  };

  return {
    generateRandomId,
  };
}
