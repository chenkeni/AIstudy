<template>
  <div>
    <div class="video-container">
      <div class="sum-left">
        <div class="sum-video">
          <video
            src="@\assets\video\计组期末考试_必考大题_指令周期流程图写法.mp4"
            controls
            class="cut-v"
          ></video>
        </div>
        <AIChatbox></AIChatbox>
      </div>
      <div class="sum-right">
        <Navigation @selectTab="selectedTab = $event"></Navigation>
        <div v-if="selectedTab === 'knowledge'">
          <KnowledgeSummary></KnowledgeSummary>
        </div>
        <div v-else-if="selectedTab === 'mindmap'">
          <MindMap></MindMap>
        </div>
        <div v-else-if="selectedTab === 'subtitles'">
          <LetterList></LetterList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AIChatbox from '@/components/AIChatbox.vue'
import Navigation from '@/components/NavigationMenu.vue'
import KnowledgeSummary from '@/components/KnowledgeSummary.vue'
import MindMap from '@/components/MindMap.vue'
import LetterList from '@/components/LetterList.vue'

export default {
  components: {
    AIChatbox,
    Navigation,
    KnowledgeSummary,
    MindMap,
    LetterList
  },
  data() {
    return {
      selectedTab: 'knowledge' // 默认选中知识点大纲
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
.sum-left {
  margin: 40px;
  height: 700px;
  flex-basis: 50%;
}
.sum-video {
  background-color: #fff;
  color: black;
  height: 400px;
}
.sum-ask {
  background-color: #fff;
  color: black;
  height: 250px;
  margin-top: 50px;
}
.ai-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.ai-input {
  display: flex;
}
.ai-input input {
  flex: 1;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin: 0 10px;
}
.ai-input button {
  padding: 5px 10px;
  background-color: #b886f8;
  color: #7728f5;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
.sum-right {
  margin: 40px;
  height: 700px;
  background-color: #fff;
  color: black;
  flex-basis: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.nav-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.nav-bar div {
  font-size: 18px;
  color: #666;
  cursor: pointer;
}
.nav-bar div.active {
  color: #000;
  font-weight: bold;
}
.content {
  margin: 20px;
  height: 550px;
  padding: 20px;
  font-size: 16px;
  background-color: #f1f1f1;
}
.sum-b {
  background-color: #b886f8;
  color: #7728f5;
  margin: 10px 20px;
  height: 50px;
  width: 140px;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>
