<template>
  <div>
    <div class="video-container">
      <div class="original-video">
        <video ref="videoPlayer" controls class="cut-v"></video>
      </div>
      <div class="rough-cut-config">
        <div class="ct">视频内容大纲</div>
        <div>
          <ul>
            <li
              v-for="point in knowledgePoints"
              :key="point.name"
              class="choose-li"
            >
              <span>{{ point.time }}</span> <span>{{ point.name }}</span>
              <label class="checkbox-container">
                <input
                  type="checkbox"
                  v-model="point.checked"
                  class="choose-box"
                  @change="toggleCheckbox(point)"
                />
                <span class="checkmark" v-if="point.checked"></span>
              </label>
            </li>
          </ul>
        </div>
        <button @click="saveCheckboxes" class="bc">选择知识点</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      knowledgePoints: [
        { time: '00:00-03:39', name: '知识点1', checked: true },
        { time: '03:40-06:59', name: '知识点2', checked: false },
        { time: '07:00-09:59', name: '知识点3', checked: false }
        // 可继续添加更多知识点
      ]
    }
  },
  methods: {
    toggleCheckbox(point) {
      point.checked = !point.checked
    },
    saveCheckboxes() {
      this.$router.push('/sum')
      const checkedPoints = this.knowledgePoints.filter(
        (point) => point.checked
      ) // Code to save the checked knowledge points
    },
    async loadVideo() {
      try {
        const response = await fetch('/api/video') // 调用后端 API 获取视频文件
        const videoBlob = await response.blob()
        const videoUrl = URL.createObjectURL(videoBlob)
        this.$refs.videoPlayer.src = videoUrl
      } catch (error) {
        console.error('Failed to load video:', error)
      }
    }
  },
  mounted() {
    this.loadVideo()
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
.choose-li {
  margin: 20px 40px;
  font-size: 20px;
}

.choose-box {
  opacity: 0;
  position: absolute;
}

.checkbox-container {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: rgb(130, 130, 130);
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.choose-box:checked ~ .checkmark:after {
  display: block;
}

.checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
