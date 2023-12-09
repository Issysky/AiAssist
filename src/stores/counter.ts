import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  interface message {
    userMessage: String
    resMessage: String
  }
  // 存放message的数组
  const messageArr = [
    {
      resContent: '2222',
      userContent: '11111111111111111111111111111111111111111111111111111111111111111111111111111'
    },
    {
      resContent: '2222',
      userContent: '123456'
    },
    {
      resContent: '2222',
      userContent: '123456'
    },
    {
      resContent: '2222',
      userContent: '123456'
    },
    {
      resContent: '2222',
      userContent: '123456'
    }
  ]
  function addMessage() {
    messageArr.push({
      userContent: '新发送消息',
      resContent: '新返回消息'
    })
  }

  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { messageArr, addMessage }
})
