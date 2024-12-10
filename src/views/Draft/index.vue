<template>
  <div>
    <ul>
      <li v-for="record in records" :key="record.id" class="history-row">
        <span>{{ record.name }}</span>
        <span class="box-day">{{ record.date }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      records: [
        { id: 1, name: '计算机组成原理-粗剪视频', date: '2024-06-11' },
        { id: 2, name: '计算机组成原理-原视频', date: '2024-06-07' },
        { id: 3, name: '计算机图形学-粗剪视频', date: '2024-04-21' },
        { id: 4, name: '操作系统粗-剪视频', date: '2023-11-29' },
        { id: 5, name: '操作系统-原视频', date: '2023-09-09' }
      ]
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.history-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  margin: 30px 40px;
  background-color: #fff;
  border: 1px solid rgb(193, 193, 193);
  box-shadow: 1px 1px 2px rgb(145, 145, 145);
  border-radius: 10px;
  padding: 25px;
  font-size: 25px;
}

.box-day {
  color: rgb(145, 145, 145);
}
</style>
