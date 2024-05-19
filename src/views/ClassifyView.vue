<script>
import { ref } from 'vue'
import TabBar from '@/components/TabBar.vue'
import store from '../stores/index'

import SideBar from '@/components/SideBar.vue'
export default {
  components: {
    TabBar,
    SideBar
  },
  setup() {
    const value = ref('')
    const sideList = ref([])
    const firstTitle = ref('时令水果')
    //获取侧边栏数据
    const getSideList = async (value) => {
      await store.dispatch('axiosGetSideList', value)

      return store.state.sideList
    }

    const handleChange = async (title) => {
      firstTitle.value = title // 这里可以接收到子组件发出的信息

      sideList.value = await getSideList(firstTitle.value)
    }

    return { value, firstTitle, handleChange, sideList }
  }
}
</script>

<template>
  <div calss="top-search">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div class="TabBar">
      <TabBar class="tabBar" @change="handleChange" />
    </div>
    <div class="middle">
      <div class="sidebar-container">
        <SideBar :sideList="sideList" />
      </div>
    </div>
  </div>
</template>
<style>
.top-search {
  text-align: center;
}
.tabBar {
  border: 0;
  border: none;
  padding: none;
}
* {
  margin: 0;
  padding: 0;
}
.sidebar-container {
  width: 25%;
  max-height: 480px; /* 你可以根据需要调整这个值 */
  overflow-y: auto;
}
.tabBar {
  padding: 0;
}
.middle {
  position: absolute;
  top: 19%;
  width: 100%;
  height: auto;
}
</style>
