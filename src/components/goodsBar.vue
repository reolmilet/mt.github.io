<template>
  <div>
    <van-card
      v-for="(item, i) in goodList"
      :key="i"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.images && typeof item.images === 'string' ? JSON.parse(item.images)[0] : ''"
    >
      <template v-if="item.price_off !== 0" #origin-price>{{ item.price_off }}</template>
      <template #tags>
        <van-tag plain type="primary">{{
          item.tags && typeof item.tags === 'string' ? JSON.parse(item.tags)[0] : ''
        }}</van-tag>
      </template>
      <template #footer>
        <van-button
          v-if="item.count > 0"
          icon="minus"
          type="primary"
          size="mini"
          @click="minus(i)"
        />
        <template v-if="item.count > 0">{{ item.count }}</template>

        <van-button icon="plus" type="primary" size="mini" @click="plus(i)"></van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import stores from '@/stores'
export default {
  props: {
    firstGood: {
      type: Array,
      default: () => []
    }
  },

  setup(props) {
    const goodList = ref([])

    watch(
      () => props.firstGood,
      (newVal) => {
        goodList.value = [...newVal]
      }
    )
    const plus = (index) => {
      if (!goodList.value[index].count) {
        goodList.value[index].count = 0
      }
      goodList.value[index].count++
    }
    const minus = (index) => {
      if (goodList.value[index].count > 0) {
        goodList.value[index].count--
      }
    }
    const filteredGoodList = computed(() => {
      return goodList.value.filter((item) => item.count > 0)
    })
    watch(filteredGoodList, (newList) => {
      stores.commit('setFilteredGoodList', newList)
    })
    return { goodList, plus, minus, filteredGoodList }
  }
}
</script>
