<template>
  <div class="wrapper">
    <div class="message-wrapper" v-if="!tipsShow">
      <div class="message-area" v-for="(message, index) in messages" :key="index">
        <p class="label">You</p>
        <div class="user-send">{{ message.userContent }}</div>
        <p class="label">Response</p>
        <div class="response">{{ message.resContent }}</div>
      </div>
    </div>
    <div class="tipsWrapper" v-if="tipsShow">
      <div class="tips" v-for="button in buttons" :key="button.text" @click="sendMessage(button.text)">
        {{ button.text }}
      </div>
    </div>
    <div class="input-container">
      <el-input
        class="input"
        v-model="inputMessage"
        placeholder="请输入消息"
        type="textarea"
        :rows="4"
      />
      <el-button v-if="inputMessage" type="primary" @click="sendMessage">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

// 定义消息类型
interface Message {
  userContent: string
  resContent: string
}

// 获取输入的消息
const inputMessage = ref('')
// 获取store
const store = useCounterStore()

// 定义messages数组
// const messages = store.messageArr
const messages = ref<Message[]>([])
const tipsShow = ref(true)

// const messages = ref<Message[]>([]);
// // 发送信息方法
const sendMessage = (msg: string) => {
  tipsShow.value = false
  if (msg) {
    inputMessage.value = msg
  }
  if (inputMessage.value) {
    messages.value.push({
      userContent: inputMessage.value,
      resContent: '232'
    })
    inputMessage.value = ''
  }
  msg = ''
  inputMessage.value = ''
}

// 定义buttons数组
const buttons = [
  { type: 'info', text: 'tips1' },
  { type: 'info', text: 'tips2' },
  { type: 'info', text: 'tips3' },
  { type: 'info', text: 'tips4' }
] as const
</script>

<style scoped lang="less">
.wrapper {
  width: 85%;
  display: flex;
  justify-content: center;
  margin-left: 15%;
  .message-wrapper {
    width: 40vw;
    overflow: hidden;

    .message-area {
      width: 40vw;
      margin-top: 50px;
      align-items: center; // 添加这一行
      font-size: 21px;

      .label {
        font-size: 14px;
        height: 20px;
        text-align: left;
      }
      .user-send {
        width: 40vw;
        // 允许换行并且高度自适应
        word-wrap: break-word;
        height: auto;
        margin-bottom: 20px;
        font-size: 16px;
      }

      .response {
        width: 40vw;
        font-size: 16px;
        // 允许换行并且高度自适应
        word-wrap: break-word;
        height: auto;
      }
    }
  }

  .tipsWrapper {
    // background-color: #bfc;
    width: 40vw;
    margin: 30% auto 0;
    .tips {
      width: 18vw;
      float: left;
      height: 40px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      border-radius: 15px;
      border: 1px solid #33333388;
      margin-bottom: 5px;
      margin-right: 20px;
    }
    .tips:hover {
      background-color: rgb(168, 172, 169);
      color: #fff;
    }
  }
  .input-container {
    height: 20vh;
    width: 60vw;
    display: flex;
    align-items: center;
    margin-top: 10px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    // box-shadow:#333 0 0 10px ;
    border-radius: 10px;
    .input {
      width: 40vw;
      margin: 0 auto;
    }

    .el-button {
      position: absolute;
      right: 120px;
    }
  }
}
</style>

