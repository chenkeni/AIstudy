<template>
  <div>
    <div class="zi">
      <p class="zia">
        <span>一</span>
        <span>键</span>
        <span>总</span>
        <span>结</span>
      </p>
      <p>网课视频内容</p>
    </div>

    <input type="file" ref="fileInput" style="display: none" />
    <button @click="uploadVideo" class="shi">上传视频</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    uploadVideo() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file', file)

      axios
        .post('http://localhost:5000/api/upload', formData)
        .then((response) => {
          // 上传成功后跳转到下一个页面
          this.$router.push('/choose')
        })
        .catch((error) => {
          console.error(error)
          // 处理上传失败的情况
        })
    }
  },
  mounted() {
    this.$refs.fileInput.addEventListener('change', this.handleFileUpload)
  },
  beforeDestroy() {
    this.$refs.fileInput.removeEventListener('change', this.handleFileUpload)
  }
}
</script>

<style>
.loading {
  color: blue;
}
.success {
  color: green;
}
.error {
  color: red;
}
.zi {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 90px;
  margin-top: 100px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.zia {
  color: #7728f5;
  display: flex;
  align-items: center;
}

.zia span {
  opacity: 0;
  transition: opacity 0.5s;
}

.zia span:nth-child(1) {
  animation: fadeIn 0.2s 0.2s forwards;
}

.zia span:nth-child(2) {
  animation: fadeIn 0.2s 0.4s forwards;
}

.zia span:nth-child(3) {
  animation: fadeIn 0.2s 0.6s forwards;
}

.zia span:nth-child(4) {
  animation: fadeIn 0.2s 0.8s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.shi {
  display: block;
  margin: 60px auto;
  font-size: 70px;
  margin-bottom: 100px;
  padding: 10px 40px;
  background-color: #93d2f3;
  color: white;
  border: none;
  border-radius: 30px;
}
.shi:hover {
  background-color: #2ba6e9;
}
</style>
