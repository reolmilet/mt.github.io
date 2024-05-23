<script>
import { showToast } from 'vant'

import { ref, watch } from 'vue'
import stores from '@/stores'
export default {
  components: {},
  setup() {
    const onSubmit = () => showToast('点击按钮')
    const goodList = ref([])
    goodList.value = stores.state.filteredGoodList

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

    watch(goodList, (newList) => {
      stores.commit('setFilteredGoodList', newList)
    })
    return {
      onSubmit,
      goodList,
      plus,
      minus
    }
  }
}
</script>

<template>
  <div class="shopping">
    <div class="top" style="margin: auto; text-align: center; padding: 10px">
      购物车
      <van-button size="mini" plain type="primary" style="position: absolute; right: 0"
        >清空购物车</van-button
      >
    </div>
    <div class="goods">
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
    </div>

    <div class="submit-bar">
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        style="position: fixed; bottom: 50px"
      />
    </div>
  </div>
</template>
<style>
.shopping {
  height: 70%;
}
.submit-bar {
  position: relative;
  top: 20px;
}
</style>
