<template>
  <van-sidebar v-model="active">
    <!-- <div v-for="(item, i) in littleSideList.value" :key="i"> -->
    <van-sidebar-item :title="item" v-for="(item, i) in littleSideList" :key="i" />
  </van-sidebar>
</template>
<script>
import { ref, watchEffect } from 'vue'

export default {
  props: {
    sideList: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const active = ref(0)
    const littleSideList = ref([...props.sideList])

    watchEffect(() => {
      littleSideList.value = [...props.sideList]
      littleSideList.value[0] = '全部'
      console.log(littleSideList.value[active.value])
    })
    return { active, littleSideList }
  }
}
</script>
