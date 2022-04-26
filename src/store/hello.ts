import { defineStore } from 'pinia'
import { ref } from 'vue'
import apis from '../apis'

export default defineStore('hello', () => {
  const message = ref('')

  const getHello = async (id?: string) => {
    if (id) {
      const result = await apis.getHello(id)
      message.value = result.record.title
    }
    return
  }

  return {
    message,
    getHello
  }
})
