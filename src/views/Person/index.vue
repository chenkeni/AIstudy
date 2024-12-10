<template>
  <div class="person-container">
    <div class="person-row">
      <button class="person-button">个人资料管理</button>
      <button class="person-button">vip购买</button>
    </div>
    <div class="person-row">
      <button class="person-button">模型配置</button>
      <button class="person-button">系统使用说明文档</button>
    </div>
  </div>
</template>
<style scoped>
.person-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.person-row {
  display: flex;
  justify-content: center;
}

.person-button {
  height: 300px;
  width: 500px;
  margin: 30px 60px;
  background-color: #93d2f3;
  color: white;
  padding: 20px 40px;
  font-size: 50px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

.person-button:hover {
  background-color: #2ba6e9;
}
</style>
