<template>
  <div class="mind">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else class="svg-container">
      <svg ref="svgRef" :style="{ width: svgWidth, height: svgHeight }"></svg>
    </div>
    <div class="controls">
      <button class="btn" @click="zoomIn">放大</button>
      <button class="btn" @click="zoomOut">缩小</button>
      <button class="btn" @click="fitToScreen">适应屏幕</button>
      <button class="btn download-btn" @click="onSave">下载</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { Transformer } from 'markmap-lib'
import { Markmap } from 'markmap-view'
import * as htmlToImage from 'html-to-image'
import { saveAs } from 'file-saver'

const transformer = new Transformer()

const mm = ref()
const svgRef = ref()
const svgWidth = ref('100%')
const svgHeight = ref('100%')
const loading = ref(true)

const update = (initValue) => {
  const { root } = transformer.transform(initValue)
  console.log('Markmap root structure:', initValue) // 检查根节点的结构
  mm.value.setData(root)
  mm.value.fit()
  loading.value = false // 加载完成后将 loading 设置为 false
}

const zoomIn = () => mm.value.rescale(1.25)

const zoomOut = () => mm.value.rescale(0.8)

const fitToScreen = () => mm.value.fit()

const onSave = async () => {
  const dataUrl = await htmlToImage.toPng(svgRef.value)

  saveAs(dataUrl, 'markmap.png')
}

onMounted(async () => {
  const response = await fetch('http://localhost:5000/analyze_md', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      file_path: 'C:/Users/86150/Desktop/创新实践/AI部分后端/test.md' // 根据实际情况修改
    })
  })

  if (response.ok) {
    const { mindmap_markdown } = await response.json()
    console.log('Received markdown:', mindmap_markdown) // 打印接收到的Markdown数据

    if (mindmap_markdown) {
      mm.value = Markmap.create(svgRef.value)
      update(mindmap_markdown) // 确保传入的是符合要求的Markdown
      console.log('SVG element:', svgRef.value)
    }
  }
})

onUpdated(update)
</script>

<style>
.loading {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}

.mind {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
}
.svg-container {
  width: 100%;
  height: 100%;
}

.controls {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.btn {
  padding: 10px 20px;
  margin: 0 30px;
  border-radius: 4px;
  border: none;
  background-color: #a3c1ff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.download-btn {
  background-color: #c45b5b;
}

.btn:hover {
  background-color: #3388ff;
}

.download-btn:hover {
  background-color: #ff3333;
}
</style>
