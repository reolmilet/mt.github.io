<template>
  <div>
    <van-tabbar v-model="active" fixed route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/classify">发现</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/home/shopping">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/home/my">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const active = ref('home')
    return { active }
  }
}
</script>
