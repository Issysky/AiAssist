<template>
    <div class="left-nav">
        <div class="user-profile">
            <img class="avatar" src="../assets/avator.png" alt="User Avatar" />
            <p class="userName">zaw</p>
            <el-icon class="tool">
                <Tools />
            </el-icon>
        </div>
         <el-button class="new-chat" plain type="info"><el-icon class="plus"><Plus /></el-icon><p>新对话</p> </el-button>
        <div class="options">
            <el-button v-for="button in buttons" :key="button.text" :type="button.type" text>{{ button.text }}</el-button>
        </div>
        <div class="history">
            <div class="label">
                <p>历史会话</p>
                <el-icon class="chat" style="position: relative; right: 0;"><ChatDotRound /></el-icon>
            </div>
            <ul>
                <el-button class="talk" v-for="talk in talks" :key="talk.text" :type="talk.type" text>{{ talk.text
                }}</el-button>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 存储按钮选项
const buttons = [
    { type: '', text: '模型1' },
    { type: ' ', text: '模型2' },
    { type: ' ', text: '模型3' },
    { type: ' ', text: '模型4' },
] as const

// 存储会话信息
const talks = [
    { type: '', text: '12345123456123456123' },
    { type: ' ', text: '123456123456123456sa' },
    { type: ' ', text: '模1234561234561234' },
    { type: ' ', text: 'asdasdasdasdsad' },
] as const



</script>

<style scoped>
.left-nav {
    width: 15vw;
    height: 94vh;
    /* 设置高度为视口高度 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: transparent;
    border-right: 1px solid #ccc;
}

.user-profile {
    width: 100%;
    /* background-color: #bfc; */
    margin-bottom: 20px;
    display: flex;

}



.avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
}

.userName {
    height: 30px;
    line-height: 30px;
    font-size: 21px;
    margin: 0;
    flex: 1;
}

.tool {
    color: #ccc;
    cursor: pointer;
    width: 20px;
    margin-top: 8px;
}


.options {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.el-button {
    width: 100%;
    height: 40px;
    margin-left: 0;
    margin-bottom: 10px;
    border-radius: 10px;
    text-align: left;
    line-height: 40px;
}
.plus{
    width: 20px;
    margin-top:-1px;
    
}
.history {
    width: 100%;
    text-align: center;
}
.chat{
    color: #ccc;
    width: 20px;
    margin-left: 60%;
    margin-top: 18px;
}

.label {
    float: left;
    font-weight: 800;
    display: flex;
    width: 100%;
}

.history ul {
    list-style-type: none;
    padding: 0;
}

.talk {
    width: 100%;
    margin-bottom: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
