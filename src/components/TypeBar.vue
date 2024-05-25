<template>
  <div>
    <van-tabbar v-model="active" fixed route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/classify">发现</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/home/shopping" :badge="count">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/home/my">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import stores from '@/stores'
export default {
  setup() {
    const active = ref('home')
    let shoppingList = ref([])

    watch(
      () => stores.state.filteredGoodList,
      (newList) => {
        shoppingList.value = newList
      }
    )
    //const shoppingList = ref(stores.state.filteredGoodList.values)
    const count = computed(() => shoppingList.value.length)

    return { active, count }
  }
}
</script>
