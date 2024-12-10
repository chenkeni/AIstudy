<template>
  <div class="knowledge-summary">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else v-html="renderedMarkdown" class="rmd"></div>
  </div>
</template>

<script>
import showdown from 'showdown'
import axios from 'axios'

export default {
  data() {
    return {
      renderedMarkdown: '',
      loading: true
    }
  },
  methods: {
    renderMarkdown(markdown) {
      const converter = new showdown.Converter()
      this.renderedMarkdown = converter.makeHtml(markdown)
      this.loading = false
    }
  },
  mounted() {
    // 发送GET请求以获取知识点大纲的Markdown内容
    axios
      .get('http://localhost:5000/get_knowledge_outline')
      .then((response) => {
        const markdown = response.data.knowledge_outline
        this.renderMarkdown(markdown)
      })
      .catch((error) => {
        console.log(error)
        this.loading = false
      })
  }
}
</script>

<style scoped>
.rmd {
  margin: 20px;
}

.loading {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}
</style>
