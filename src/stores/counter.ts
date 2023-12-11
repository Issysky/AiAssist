import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTalkStore = defineStore('talk', () => {
  interface message {
    role: string
    content: string
  }
  interface Button {
    role: string
    content: string
  }
  // 存放message的数组
  const messageArr = ref<message[]>([
    
  ])
  // 定义存放提示信息的数组
  const promptArr = ref<message[]>([
    {
      role:"system",
      content:"You are a helpful assistant."
    },
    {
      role: 'user',
      content: '现在请你扮演一个小学生，你的名字叫小明，你的年龄是10岁，你的爱好是打篮球。'
    },
    {
      role:'assistant',
      content:'好的，我了解了'
    }
  ])

  // 定义模式选项数组
  // const buttons = [
  //   { type: 'info', text: '模型1', model: model1, isActive: 'true' },
  //   { type: 'info', text: '模型2', model: model2, isActive: 'false' },
  // ] as const

  // 通义千问接口地址
  const url = '/api'
  // 请求头
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'sk-0742b588c23144b4a0fcf5cbc3482460'
    // Authorization: 'sk-41a613af91ba496890f78e1eb57a27dd'
  }
  // 请求体
  const data = {
    model: 'qwen-turbo',
    input: {
      messages: [
        {
          role: '',
          content: ''
        }
      ]
    },
    parameters: {
      seed:65535
    }
  }
  // 发送请求
  function getTalks() {
    // 将messagesArr.value赋值给请求体
    data.input.messages = [...promptArr.value, ...messageArr.value]
    console.log(data.input.messages)
    console.log('调用getTalks发送请求')
    axios
      .post(url, data, { headers })
      .then((response) => {
        let res = response.data
        // console.log(res)
        // console.log(res.output.text)
        // 拼接历史记录
        addMessage('assistant', res.output.text)
        // console.log(messageArr)
        // console.log(messageArr.value)
      })
      .catch((error) => {
        console.warn(error)
      })
  }
  // 添加用户消息到消息数组
  function addMessage(role: string, content: string) {
    messageArr.value.push({
      role,
      content
    })
  }
  // 清空消息数组
  function resetMessage() {
    messageArr.value = []
  }
  // 更换提示信息
  function changePrompt(prompt: string) {
    promptArr.value =[
      {
        role:"system",
        content:"You are a helpful assistant."
      },
      {
        role: 'user',
        content: prompt
      },
      {
        role:'assistant',
        content:'好的，我了解了'
      }
    ]
    // console.log(promptArr)
  }
  return { messageArr, addMessage, getTalks, resetMessage, changePrompt}
})
