<template>
  <div>
    <van-card
      v-for="(item, i) in goodList"
      :key="i"
      :num="2"
      :origin-price="item.price_off"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="JSON.parse(item.images)[0]"
    >
      <template v-if="item.price_off !== 0" #origin-price>{{ item.price_off }}</template>
      <template #tags>
        <van-tag plain type="primary">{{ JSON.parse(item.tag)[0] }}</van-tag>
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
