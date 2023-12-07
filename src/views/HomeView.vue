<template>
    <div class="wrapper">
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
            <el-input
                v-model="inputMessage"
                placeholder="请输入消息"
                type="textarea"
                :rows="3"
            />
            <el-button v-if="inputMessage" type="primary" @click="sendMessage">发送</el-button>
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
.wrapper{
    display: flex;
    justify-content: center;
}
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
    width: 40vw;
}

.user-message {
    color: #333;
}

.input-container {
    height: 10vh;
    width: 40vw;
    display: flex;
    align-items: center;
    margin-top: 10px;
    position: fixed;
    bottom: 15px;
    left: 40%;
}

.el-input {
    resize:vertical;
}
</style>
