<script>
import { ref, computed } from 'vue'
import stores from '@/stores'
import { showToast } from 'vant'
export default {
  setup() {
    const show = ref(false)
    const userName = ref('')
    const passward = ref('')
    const userData = computed(() => ({
      userName: userName.value,
      passward: passward.value
    }))
    const signin = async () => {
      const match = await stores.dispatch('axiosGetUserData', {
        userName: userName.value,
        password: passward.value
      })
      console.log(match)
      if (match == true) {
        showToast('登录成功')
        show.value = false
      } else {
        showToast('登录失败')
      }
    }
    const signup = () => {
      const bo = stores.dispatch('axiosSetUserData', {
        userName: userName.value,
        password: passward.value
      })
      if (bo) {
        showToast('注册成功')
      } else {
        showToast('注册失败')
      }
    }
    return { show, userName, passward, signin, signup, userData }
  }
}
</script>

<template>
  <div>
    <van-button type="primary" text="显示遮罩层" @click="show = true" />
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <van-cell-group inset>
            <van-field v-model="userName" label="用户名" placeholder="请输入用户名" />
            <van-field v-model="passward" label="密码" placeholder="请输入密码" />
          </van-cell-group>
          <div style="margin-left: 40%">
            <van-button type="primary" text="登录" @click="signin" size="mini" />
            <van-button type="primary" text="注册" @click="signup" size="mini" />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>
<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 300px;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
