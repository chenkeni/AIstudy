<template>
  <div>
    <div class="video-container">
      <div class="original-video">
        <video
          src="@\assets\video\计组期末考试_必考大题_指令周期流程图写法.mp4"
          controls
          class="cut-v"
        ></video>
      </div>
      <div class="rough-cut-config">
        <div class="ct">粗剪配置</div>
        <div class="cp">
          <div class="cut-p">
            如果音量高于<input
              type="text"
              v-model="volumeThreshold"
              class="cut-input"
            />dB，则视为“噪音”
          </div>
          <div class="cut-p">
            如果音量低于<input
              type="text"
              v-model="lowVolumeThreshold"
              class="cut-input"
            />dB，则视为“无用”
          </div>
          <div class="cut-p">
            有用视频之间至少保留<input
              type="text"
              v-model="minDuration"
              class="cut-input"
            />秒
          </div>
        </div>
        <button @click="onButtonClick" class="bc">一键粗剪</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedVideo: '',
      volumeThreshold: 0,
      lowVolumeThreshold: 0,
      minDuration: 0
    }
  },
  methods: {
    uploadVideo() {
      this.$refs.fileInput.click()
    },
    onButtonClick() {
      this.$router.push('/choose')
      // 在这里可以将数据上传到服务器或进行其他操作
      // 例如，可以使用axios将数据上传到服务器
      axios
        .post('/upload', {
          volumeThreshold: this.volumeThreshold,
          lowVolumeThreshold: this.lowVolumeThreshold,
          minDuration: this.minDuration
        })
        .then((response) => {
          // 上传成功的回调处理
          // 跳转至其他页面
          this.$router.push('/choose')
        })
        .catch((error) => {
          // 上传失败的回调处理
        })
    }
  }
}
</script>

<style>
.video-container {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.original-video {
  margin: 40px;
  height: 400px;
  background-color: #fff;
  color: black;
  flex-basis: 50%;
}
.rough-cut-config {
  margin: 40px;
  height: 400px;
  background-color: #fff;
  color: black;
  flex-basis: 50%;
}
.ct {
  margin: 20px;
  margin-left: 30px;
  font-size: 40px;
  font-weight: bold;
}
.cp {
  padding: 0 20px;
}
.bc {
  display: block;
  margin: 20px auto;
  margin-top: 40px;
  font-size: 30px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #93d2f3;
  color: white;
  border: none;
  border-radius: 10px;
}
.bc:hover {
  background-color: #2ba6e9;
}
.cut-v {
  height: 400px;
  width: 100%;
}
.cut-p {
  margin: 20px;
  font-size: 25px;
}
.cut-input {
  font-size: 25px;
  background-color: #d6d6d6;
}
input.cut-input {
  width: 70px;
}
</style>
