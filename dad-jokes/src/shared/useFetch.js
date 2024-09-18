import { ref, onMounted } from 'vue'

export function useFetch(url, options) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = async () => {
    try {
      const res = await fetch(url,options)
      data.value = await res.json()
    } catch (err) {
      error.value = err
    }
  }

  onMounted(() => {
    fetchData()
  })

  return { data, error, fetchData }
}
