<template>
  <div>
    <van-card
      v-for="(item, i) in goodList"
      :key="i"
      :num="2"
      :tags="item.tags"
      :origin-price="item.price"
      :price="item.price_off"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.images[0]"
    >
      <template #tags>
        <van-tag plain type="primary" v-for="(tag, i) in item.tags" :key="i">{{ tag }}</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    firstGood: {
      type: Array,
      default: () => []
    }
  },

  // computed: {
  //   goodList() {
  //     return store.state.goodList
  //   }
  // }
  setup(props) {
    const goodList = ref([])
    watch(
      () => props.firstGood,
      (newVal) => {
        goodList.value = [...newVal]
        console.log(goodList.value)
      }
    )
    return { goodList }
  }
}
</script>
