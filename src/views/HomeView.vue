<template>
    <div class="wrapper">
        <div class="message-wrapper">
            <div class="message-area" v-for="(message, index) in messages" :key="index">
                <div class="user-send">{{ message.userContent }}</div>
                <div class="response">222</div>
            </div>
        </div>
        <div class="input-container">
            <el-input v-model="inputMessage" placeholder="请输入消息" type="textarea" :rows="3" />
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
const messages = ref([
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
    },
    {
        resContent: '2222',
        userContent: '123456'
    },
    {
        resContent: '2222',
        userContent: '123456'
    }
])
// const messages = ref<Message[]>([]);
// // 发送信息方法
// const sendMessage = () => {
//     if (inputMessage.value) {
//         messages.value.push({
//             type: 'user',
//             content: inputMessage.value
//         });
//         inputMessage.value = '';
//     }
// };
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

            .user-send {
                width: 40vw;
                background-color: #bfc;
                // 允许换行并且高度自适应
                word-wrap: break-word;
                height: auto;
                margin-bottom: 20px;
            }

            .response {
                width: 40vw;
                background-color: #bfc;
                // 允许换行并且高度自适应
                word-wrap: break-word;
                height: auto;
            }
        }
    }


    .input-container {
        height: 10vh;
        width: 40vw;
        display: flex;
        align-items: center;
        margin-top: 10px;
        position: fixed;
        bottom: 15px;
    
        .el-input {
            resize: vertical;
        }
    }


}
</style>

