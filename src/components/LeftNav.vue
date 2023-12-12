<template>
  <div class="left-nav">
    <div class="user-profile">
      <img class="avatar" src="../assets/avator.png" alt="User Avatar" />
      <p class="userName">公路工程局</p>
      <el-icon class="tool">
        <Tools />
      </el-icon>
    </div>
    <div class="options">
      <button class="btn" :class="{ 'active': button.isActive }" @click="changeModel(button.model)"
        v-for="button in store.buttonArr">{{ button.text }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTalkStore } from '../stores/counter'

const store = useTalkStore()
// 切换模式的函数
const changeModel = (model: string) => {
  store.resetMessage()
  store.changePrompt(model)
  // 更新按钮的激活状态
  store.buttonArr.forEach((button) => {
    button.isActive = button.model === model;
  });
}

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
  background-color: #000000;
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
  color: #fff;
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

.btn {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  color: #FFF;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #FFFFFF22;
}

.active {
  background-color: #FFFFFF22;
}

.plus {
  width: 20px;
  margin-top: -1px;
}

.history {
  width: 100%;
  text-align: center;
}

.chat {
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
}</style>
