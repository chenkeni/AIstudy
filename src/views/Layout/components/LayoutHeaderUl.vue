<script setup>
import { RouterLink, useRoute } from 'vue-router'

const isActive = (path) => {
  const route = useRoute()
  return route.path === path ? 'active' : ''
}
</script>

<template>
  <div class="nav">
    <RouterLink to="/" :class="isActive('/')">首页</RouterLink>
    <RouterLink to="/draft" :class="isActive('/draft')">本地草稿</RouterLink>
    <RouterLink to="/history" :class="isActive('/history')"
      >历史记录</RouterLink
    >
    <RouterLink to="/person" :class="isActive('/person')">我的</RouterLink>
  </div>
</template>

<style lang="scss">
.nav {
  display: flex;
  padding-left: 500px;
  justify-content: flex-start;
}

.nav a {
  margin-right: 32px;
  text-decoration: none;
  font-size: 32px;
}

.nav a.active {
  color: #2b9be6;
}
</style>
