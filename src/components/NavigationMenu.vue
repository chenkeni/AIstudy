<template>
  <div class="navigation">
    <ul>
      <li
        :class="{ active: selectedTab === 'knowledge' }"
        @click="selectTab('knowledge')"
      >
        知识点大纲
      </li>
      <li
        :class="{ active: selectedTab === 'mindmap' }"
        @click="selectTab('mindmap')"
      >
        思维导图
      </li>
      <li
        :class="{ active: selectedTab === 'subtitles' }"
        @click="selectTab('subtitles')"
      >
        字幕列表
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'knowledge'
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
      this.$emit('selectTab', tab)
    }
  }
}
</script>

<style scoped>
.navigation {
  margin-bottom: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex; /* 将列表项横向排列 */
  justify-content: space-between; /* 将列表项平均分布 */
}

li {
  cursor: pointer;
  padding: 15px;
  border-bottom: 1px solid #eee;
  flex: 1; /* 列表项平均占据宽度 */
  text-align: center;
  font-size: 16px;
  color: #333;
}

li.active {
  background-color: #fff;
  font-weight: bold;
}
</style>
