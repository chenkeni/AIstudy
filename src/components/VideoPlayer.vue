<template>
  <div class="video-player">
    <video :src="videoUrl" controls></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: 'assets/videos/your_video.mp4'
    }
  }
}
</script>

<style scoped>
.video-player {
  max-width: 100%;
  margin-bottom: 20px;
}
</style>
