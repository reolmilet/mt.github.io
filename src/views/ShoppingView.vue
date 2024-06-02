<script>
import { showToast } from 'vant'
import { showConfirmDialog } from 'vant'
import { ref, watch, computed, onUnmounted } from 'vue'
import stores from '@/stores'
export default {
  components: {},
  setup() {
    const onSubmit = async () => {
      let transformedFilteredGoodList = filteredGoodList.value.map((item) => ({
        user_id: stores.state.signin.id,
        product_id: item.id,
        quantity: item.count
      }))

      const bo = await stores.dispatch('axiosSetFilteredGoodList', transformedFilteredGoodList)
      if (bo) {
        goodList.value = []
        stores.commit('setFilteredGoodList', [])
        // await stores.dispatch('axiosGetGoodsList')
        showToast('成功提交')
      } else {
        showToast('提交失败')
      }
    } // 提交订单
    const goodList = ref([])

    goodList.value = stores.state.filteredGoodList //将vuex中的filteredGoodList数据赋值给goodList

    const plus = (index) => {
      filteredGoodList.value[index].count++
    } //增加商品数量
    const minus = (index) => {
      filteredGoodList.value[index].count--
    } //减少商品数量
    const allPrises = computed(() => {
      return goodList.value.reduce((total, item) => {
        return total + item.price * item.count
      }, 0)
    }) //计算总价
    const filteredGoodList = computed(() => {
      return goodList.value.filter((item) => item.count > 0)
    }) //过滤商品列表
    const stopWatch = watch(filteredGoodList, (newList) => {
      stores.commit('setFilteredGoodList', newList)
    }) //监听filteredGoodList的变化
    onUnmounted(() => {
      stopWatch()
    }) //销毁监听
    const clearShopping = () => {
      showConfirmDialog({
        title: '清除购物车',
        message: '您真的要清空购物车吗'
      })
        .then(() => {
          goodList.value = []
          stores.commit('setFilteredGoodList', [])
        })
        .catch(() => {
          return
        })
    } //清空购物车
    return {
      onSubmit,
      goodList,
      plus,
      minus,
      filteredGoodList,
      clearShopping,
      allPrises
    }
  }
}
</script>

<template>
  <div class="shopping">
    <div class="top" style="margin: auto; text-align: center; padding: 10px">
      购物车
      <van-button
        size="mini"
        plain
        type="primary"
        style="position: absolute; right: 0"
        @click="clearShopping"
        >清空购物车</van-button
      >
    </div>
    <van-empty
      image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
      image-size="80"
      description="购物车空空如也"
      v-if="filteredGoodList.length === 0"
    />
    <div class="goods">
      <div>
        <van-card
          v-for="(item, i) in filteredGoodList"
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
        :price="allPrises * 100"
        button-text="提交订单"
        @submit="onSubmit"
        style="position: fixed; bottom: 50px"
      />
    </div>
  </div>
</template>
<style>
.goods {
  display: flex;
  margin: auto;
  height: 470px;
  overflow-y: auto; /* 当内容超出容器的高度时，显示垂直滚动条 */
}
.shopping {
  height: 70%;
}
.submit-bar {
  position: relative;
  top: 20px;
}
</style>
