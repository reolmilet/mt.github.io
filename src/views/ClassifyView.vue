<script>
import { ref } from 'vue'
import TabBar from '@/components/TabBar.vue'
export default {
  components: {
    TabBar
  },
  setup() {
    const value = ref('')
    return { value }
  }
}
</script>

<template>
  <div calss="top-search">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <TabBar />
  </div>
</template>
<style>
.top-search {
  text-align: center;
}
</style>
