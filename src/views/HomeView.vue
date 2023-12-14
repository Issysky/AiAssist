<template>
  <div class="wrapper">
    <div class="header">{{ homeViewText.headerText }}</div>
    <div class="clear" @click="clear"><el-icon>
        <CloseBold />
      </el-icon></div>
    <div class="message-wrapper" v-if="store.messageArr.length != 0">
      <div class="message-area" v-for="(message, index) in store.messageArr" :key="index">
        <p class="label">
          <img class="avator" :src="message.role === 'user' ? avatorArr[0] : avatorArr[1]">
        <p>{{ message.role === 'user' ? nameArr[0] : nameArr[1] }}</p>
        </p>
        <div class="send-res">{{ message.content }}</div>
      </div>
    </div>
    <div class="tipsWrapper" v-if="store.messageArr.length == 0">
      <div class="tips" v-for="button in buttons" :key="button.text" @click="sendMessage('user', button.text)">
        {{ button.text }}
      </div>
    </div>
    <div class="input-container">
      <div class="input"><textarea v-model="inputMessage"  @keydown.enter="sendMessage('user', inputMessage)" placeholder="您想知道些什么..." cols="30" rows="4"></textarea></div>
        <el-button v-if="inputMessage" type="info" plain @click="sendMessage('user', inputMessage)"><el-icon>
            <Promotion />
          </el-icon></el-button>
      </div>
    <div class="footer">{{ footerInfo }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTalkStore } from '../stores/talk'
import homeViewText from '../assets/json/homeView.json'
import avator from '../assets/avator.png'
import logo from '../assets/logo.png'

// 定义消息类型
interface Message {
  role: string
  content: string
}
interface Button {
  type: string
  text: string
}

// 用户和回复头像的路径
const avatorArr = ref([
  avator, logo
])


// 用户和回复的名字
const nameArr = ref([
  ...homeViewText.nameArr
])

// 定义buttons数组
const buttons = ref<Button[]>([
  { type: 'info', text: homeViewText.buttonArr[0] },
  { type: 'info', text: homeViewText.buttonArr[1] },
  { type: 'info', text: homeViewText.buttonArr[2] },
  { type: 'info', text: homeViewText.buttonArr[3] }
])

const footerInfo = ref<string>('艾环梦工程科技公司')
// 获取输入的消息
let inputMessage = ref<string>('')
// 获取store
const store = useTalkStore()

// 发送信息方法
const sendMessage = (role: string, msg: string) => {
  // console.log(store.messageArr)
  console.log("调用sendMessage")
  // 如果msg存在，就把msg赋值给inputMessage
  if (msg) {
    inputMessage.value = msg
  }
  // 如果inputMessage存在，就把inputMessage的值push到messages数组中
  if (inputMessage.value) {
    store.addMessage('user', inputMessage.value)
    inputMessage.value = ''
  }
  store.getTalks()
  // 将msg和inputMessage置空
  msg = ''
  inputMessage.value = ''
}

// 清屏
const clear = () => {
  store.resetMessage()
}
// shift+enter换行
// const handleEnterKey = (event:KeyboardEvent) => {
//   if (event.shiftKey) {
//     // 如果同时按下了 Shift 键，就插入一个换行符
//     inputMessage += '\n';
//   } else {
//     // 否则，就发送消息
//     sendMessage('user', inputMessage);
//     inputMessage = '';
//   }
// };
</script>

<style scoped lang="less">
.wrapper {
  width: 85%;
  display: flex;
  justify-content: center;
  margin-left: 15%;

  .header {
    position: fixed;
    top: 0;
    left: 7%;
    width: 100%;
    text-align: center;
    height: 60px;
    font-size: 44px;
    line-height: 60px;
    font-weight: 700;
    border-bottom: 1px solid #33333333;
    // background-color: #fff;
  }

  .model {
    position: fixed;
    width: 160px;
    height: 40px;
    top: 30px;
    // background-color:#bfc;
    border: 2px solid #33333333;
    border-radius: 15px;
    text-align: center;
    line-height: 40px;
    left: 18vw;
  }

  .clear {
    position: fixed;
    width: 20px;
    height: 20px;
    font-size: 22px;
    right: 3%;
    top: 8%;
    color: #33333388;
    cursor: pointer;
  }

  .clear:hover {
    color: #000;
  }

  .message-wrapper {
    width: 40vw;
    overflow: hidden;
    height: 75vh;
    overflow-y: auto;
    margin-top: 55px;

    .message-area {
      width: 35vw;
      margin-top: 50px;
      align-items: center; // 添加这一行
      font-size: 21px;

      .label {
        font-size: 16px;
        height: 20px;
        text-align: left;
        line-height: 20px;

        .avator {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-top: 0px;
          // display: inline-block;
          float: left;
        }

        p {
          height: 20px;
          margin: 10px 0 0 8px;
          float: left;
          font-weight: 700
        }
      }

      .send-res {
        width: 100%;
        // 允许换行并且高度自适应
        word-wrap: break-word;
        text-align: left;
        height: auto;
        margin-bottom: 20px;
        font-size: 22px;
        margin-top: 30px;
      }
    }
  }

  .tipsWrapper {
    // background-color: #bfc;
    width: 50vw;
    margin: 63vh auto 0;

    .tips {
      width: 23.5vw;
      float: left;
      height: 60px;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
      border-radius: 15px;
      border: 1px solid #33333388;
      margin-bottom: 15px;
      margin-right: 20px;
      background-color: #33333322;
    }

    .tips:hover {
      background-color: rgba(168, 172, 169, 0.5);
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
      border-radius: 20px;
      border: 2px solid #33333333;

      textarea {
        border: none;
        width: 95%;
        margin-left: 20px;
        margin-top: 5px;
        outline: none;
        font-size: 20px;
        /* 清除默认的大小调整功能 */
        resize: none;
      }

    }

    .el-button {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 10%;
      border-radius: 20px;
      font-weight: 800;
      font-size: 30px;

      // border: 2px solid #33333388;
    }
  }

  .footer {
    position: fixed;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #33333388;
  }
}


.message-wrapper::-webkit-scrollbar {
  width: 8px;
}

.message-wrapper::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

.message-wrapper::-webkit-scrollbar-thumb {
  background-color: #ccc;
}

.message-wrapper::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}</style>
