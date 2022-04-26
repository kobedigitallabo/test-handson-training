import { defineStore } from 'pinia'
import { ref } from 'vue'
import apis from '../apis'

export default defineStore('hello', () => {
  const message = ref('')

  const getHello = async (id?: string) => {
    if (!id) {
      return
    }
    try {
      const {hello} = await apis.getHello(id)
      message.value = hello.title
    } catch (e: any) {
      message.value = e.message
      return
    }
  }

  return {
    message,
    getHello
  }
})
