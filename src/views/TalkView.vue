<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      <div v-if="message.type === 'response'">
        <el-card class="response-card">
          <div class="response-message">{{ message.content }}</div>
        </el-card>
      </div>
      <div v-else>
        <el-card class="user-card">
          <div class="user-message">{{ message.content }}</div>
        </el-card>
      </div>
    </div>
    <div class="input-container">
      <el-input v-model="inputMessage" placeholder="请输入消息" />
      <el-button type="primary" @click="sendMessage">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义消息类型
interface Message {
    type: string;
    content: string;
}

const inputMessage = ref('');
const messages = ref<Message[]>([]);
// 发送信息方法
const sendMessage = () => {
    if (inputMessage.value) {
        messages.value.push({
            type: 'user',
            content: inputMessage.value
        });
        inputMessage.value = '';
    }
};
</script>

<style scoped>
.response-card {
  margin-bottom: 10px;
  background-color: #f5f5f5;
  padding: 10px;
}

.response-message {
  color: #333;
}

.user-card {
  margin-bottom: 10px;
  background-color: #e6f7ff;
  padding: 10px;
}

.user-message {
  color: #333;
}

.input-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>
