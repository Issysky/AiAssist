import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTalkStore = defineStore('talk', () => {
  interface message {
    role: string
    content: string
  }
  // 存放message的数组
  const messageArr = ref<message[]>([])
  // 定义存放提示信息的数组
  const promptArr = ref<message[]>([
    {
      role: 'system',
      content: 'You are a helpful assistant.'
    },
    {
      role: 'user',
      content: '接下来我会给你提供一些信息，请记好并根据这些信息去回答我接下来的问题,回答的时候将这些信息当成你已知的而不是我提供的.：我们今天一共完成了421167.35元形象产值，我们目前合同的结算率是61.3%，我们梁场每个梁的养生燃料费是1200元。不要在回答中出现诸如根据我提供的信息之类的字眼，否则我会认为你没有记住这些信息'
    },
    {
      role: 'assistant',
      content: '好的，我了解了'
    },
  ])
  // 模式提示词
  const buttonArr = [
    {
      index: '1',
      model: '接下来我会给你提供一些信息，请记好并根据这些信息去回答我接下来的问题,回答的时候将这些信息当成你已知的而不是我提供的.：我们今天一共完成了421167.35元形象产值，我们目前合同的结算率是61.3%，我们梁场每个梁的养生燃料费是1200元。不要在回答中出现诸如根据我提供的信息之类的字眼，否则我会认为你没有记住这些信息',
      text: 'AI资料助手',
      isActive: 1
    },
    {
      index: '2',
      model: '接下来我会给你提供一些信息，请记好并根据这些信息去回答我接下来的问题：我们今天一共完成了421167.35元形象产值，我们目前合同的结算率是61.3%，我们梁场每个梁的养生燃料费是1800元',
      text: '工程建设知识问答',
      isActive: 0
    }
  ] as const

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
      seed: 65535
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
    if (role === 'user') {
      messageArr.value.push({
        role,
        content
      })
    } else {
      // console.log(content.length, content, content[1])
      combination(content)
    }
  }
  // 清空消息数组
  function resetMessage() {
    messageArr.value = []
  }
  // 更换提示信息
  function changePrompt(prompt: string) {
    promptArr.value = [
      {
        role: 'system',
        content: 'You are a helpful assistant.'
      },
      {
        role: 'user',
        content: prompt
      },
      {
        role: 'assistant',
        content: '好的，我了解了'
      }
    ]
    console.log(promptArr)
  }
  // 将返回内容分解为单个字符拼接到数组中，实现字符逐个出现的效果
  function combination(content: string) {
    // 临时存放结果的数组
    let arr: Array<string> = []
    // 存入数组的索引
    let index = 0
    // 打印字符的随机间隔时间ms
    let max = 200
    let min = 50
    let interval = 3000 / content.length
    // let interval = Math.floor(Math.random() * (200 - 50 + 1)) + 50
    messageArr.value.push({
      role: 'assistant',
      content: ''
    })
    // 定义计时器，每隔interval毫秒将content中的一个字符拼接到数组中
    let timer = setInterval(() => {
      arr.push(content[index])
      index++
      messageArr.value[messageArr.value.length - 1].content = arr.join('')
      if (index >= content.length) {
        let res = arr.join('')
        // console.log('拼接结果', res)
        clearInterval(timer)
      }
    }, interval)
  }

  return { messageArr, buttonArr, addMessage, getTalks, resetMessage, changePrompt }
})
