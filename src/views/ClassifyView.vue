<script>
import { ref } from 'vue'
import TabBar from '@/components/TabBar.vue'
import store from '../stores/index'
import goodsBar from '@/components/goodsBar.vue'
import SideBar from '@/components/SideBar.vue'
export default {
  components: {
    TabBar,
    SideBar,
    goodsBar
  },
  setup() {
    const value = ref('')
    const sideList = ref([])
    const firstTitle = ref('时令水果')
    const firstGood = ref([])
    const goodClass = {
      type: '苹果',
      page: 1,
      size: 10
    }
    //获取侧边栏数据
    const getSideList = async (value) => {
      await store.dispatch('axiosGetSideList', value)

      return store.state.sideList
    }
    const getGoodList = async (value) => {
      await store.dispatch('axiosoriginGoodList', value)

      return store.state.goodList
    }

    const handleChange = async (title) => {
      firstTitle.value = title // 这里可以接收到子组件发出的信息

      sideList.value = await getSideList(firstTitle.value)
      goodClass.type = sideList.value[0]
      firstGood.value = await getGoodList(goodClass)
    }
    const sideChange = async (title) => {
      goodClass.type = title
      firstGood.value = await getGoodList(goodClass)

      // 这里可以接收到子组件发出的信息
    }

    return { value, firstTitle, handleChange, sideList, sideChange, firstGood }
  }
}
</script>

<template>
  <keep-alive>
    <div calss="top-search">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <div class="TabBar">
        <TabBar class="tabBar" @change="handleChange" />
      </div>
      <div class="middle">
        <div class="sidebar-container">
          <SideBar :sideList="sideList" @change="sideChange" />
        </div>
        <div class="goods2">
          <goodsBar :firstGood="firstGood" />
        </div>
      </div>
    </div>
  </keep-alive>
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
  width: 21%;
  max-height: 480px; /* 你可以根据需要调整这个值 */
  overflow-y: auto;
}
.goods2 {
  width: 78%;
  max-height: 480px; /* 你可以根据需要调整这个值 */
  overflow-y: auto;
}

.middle {
  position: absolute;
  top: 19%;
  width: 100%;
  height: auto;
  display: flex;
}
</style>
