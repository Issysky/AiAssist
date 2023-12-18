<template>
  <div class="left-nav">
    <div class="user-profile">
      <img
        class="avatar"
        src="https://gateway.guangzc.com/gzc-file-service/attachments/show/9a62df904a6d04d6bd1b3c0ce2e4f10a"
        alt="User Avatar"
      />
      <p class="userName">{{ leftNavData.name }}</p>
      <el-icon class="tool">
        <Tools />
      </el-icon>
    </div>
    <div class="options">
      <button
        :class="{ active: button.isActive,btn:true }"
        @click="changeModel(button.model,button.index)"
        v-for="button in store.buttonArr"
        :key = "button.index"
      >
        {{ button.text }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTalkStore } from '../stores/talk'
import leftNavData from '../assets/json/leftNav.json'

const store = useTalkStore()
// 切换模式的函数
const changeModel = (model: string,index:number) => {
  store.resetMessage()
  store.changePrompt(model)
  // 更新按钮的激活状态
  store.buttonArr.forEach((button: any,index:number) => {
    button.isActive = button.model == model
  })
}
</script>

<style scoped lang="less">
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

  .user-profile {
    width: 100%;
    /* background-color: #bfc; */
    margin-bottom: 20px;
    display: flex;

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
  }

  .options {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    .btn {
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
      border-radius: 10px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 20px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #ffffff22;
    }

    .active {
      background-color: #ffffff22;
    }
  }
}
</style>
