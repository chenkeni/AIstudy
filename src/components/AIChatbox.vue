<template>
  <div class="ai-chatbox">
    <h2 class="chatbox-title">AI问答</h2>
    <div class="chat-history">
      <div v-for="message in messages" :key="message.id" class="message">
        <div class="user-message" v-if="message.user">
          {{ message.content }}
        </div>
        <div class="ai-message" v-else>
          <div v-if="!message.loading">{{ message.content }}</div>
          <div v-else class="loading">Loading...</div>
        </div>
      </div>
      <div ref="chatEnd"></div>
    </div>
    <div class="input-area">
      <input type="text" v-model="inputText" placeholder="请输入问题" />
      <button @click="handleSubmit" class="but-commit">提交</button>
      <button @click="handleClear" class="but-clear">清空对话</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, nextTick } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const inputText = ref('')
    const messages = reactive([])

    function handleSubmit() {
      if (!inputText.value) return

      messages.push({
        id: Date.now(),
        content: inputText.value,
        user: true
      })

      const loadingMessage = {
        id: Date.now(),
        content: '',
        user: false,
        loading: true
      }
      messages.push(loadingMessage)

      axios
        .post('http://127.0.0.1:5000', {
          question: inputText.value
        })
        .then((response) => {
          nextTick(() => {
            messages.splice(messages.indexOf(loadingMessage), 1, {
              id: Date.now(),
              content: response.data.answer,
              user: false,
              loading: false
            })
            scrollToBottom()
          })
        })
        .catch((error) => {
          console.error(error)
        })

      inputText.value = ''
    }

    function handleClear() {
      axios
        .post('http://127.0.0.1:5000/clear_history')
        .then((response) => {
          console.log(response.data.message)
          messages.splice(0)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    function scrollToBottom() {
      nextTick(() => {
        const chatEnd = ref('chatEnd')
        chatEnd.value.scrollIntoView({ behavior: 'smooth' })
      })
    }

    return {
      inputText,
      messages,
      handleSubmit,
      handleClear
    }
  }
}
</script>
<style scoped>
.ai-chatbox {
  max-width: 100%;
  margin-top: 20px;
  background-color: #d6d2d2;
  border: 1px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.chatbox-title {
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
}

.input-area {
  display: flex;
  margin-top: 10px;
}

input {
  width: 200px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.chat-history {
  max-height: 200px;
  overflow-y: auto;
}

.message {
  margin-bottom: 10px;
  word-wrap: break-word;
  display: flex;
}

.user-message {
  background-color: #f2f2f2;
  padding: 5px 10px;
  border-radius: 5px;
  align-self: flex-start;
}

.ai-message {
  background-color: #007bff;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  align-self: flex-end;
}

.user-message::after {
  content: '';
  position: absolute;
  border-width: 5px;
  border-style: solid;
  border-color: transparent #f2f2f2 transparent transparent;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
}

.ai-message::after {
  content: '';
  position: absolute;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent #007bff;
  top: 50%;
  transform: translateY(-50%);
  right: -10px;
}

/* 美化滚动条 */
.chat-history::-webkit-scrollbar {
  width: 6px;
}

.chat-history::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.chat-history::-webkit-scrollbar-track {
  background-color: transparent;
}

.but-commit {
  margin-right: 20px;
}
</style>
