<template>
  <van-sidebar v-model="active">
    <!-- <div v-for="(item, i) in littleSideList.value" :key="i"> -->
    <van-sidebar-item
      :title="isNaN(item) ? item : '全部'"
      v-for="(item, i) in littleSideList"
      :key="i"
    />
  </van-sidebar>
</template>
<script>
import { ref, watchEffect, watch } from 'vue'

export default {
  props: {
    sideList: {
      type: Array,
      default: () => []
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const active = ref()
    const littleSideList = ref([...props.sideList])

    watchEffect(() => {
      littleSideList.value = [...props.sideList]
    })
    watch(active, (newActive) => {
      emit('change', littleSideList.value[newActive])
    })
    return { active, littleSideList }
  }
}
</script>
