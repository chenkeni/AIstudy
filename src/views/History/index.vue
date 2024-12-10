<template>
  <div>
    <ul>
      <li v-for="record in records" :key="record.id" class="history-row">
        <span>{{ record.name }}</span>
        <span
          ><a :href="'/details/' + record.id"
            >总结摘要/思维导航/字幕列表</a
          ></span
        >
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
        { id: 1, name: '知识点1视频', date: '2024-06-11' },
        { id: 2, name: '知识点2视频', date: '2024-06-11' },
        { id: 3, name: '知识点3视频', date: '2024-06-11' },
        { id: 4, name: '知识点4视频', date: '2024-06-11' },
        { id: 5, name: '知识点5视频', date: '2024-06-11' }
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

a {
  text-decoration: underline;
  color: #2ba6e9;
  cursor: pointer;
  margin-left: 10px;
}

.box-day {
  color: rgb(145, 145, 145);
}
</style>
