<template>
  <div class="home">
    <div class="top">
      <div class="loader"></div>
      <div class="title">mt商城</div>

      <div class="loader"></div>
    </div>

    <div class="power">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img class="imgs" :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style>
.home {
  margin: 0;
  padding: 0;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
}
.title {
  color: #e06b05;
  font-size: 20px;
}
.power {
  overflow: hidden;
}
.van-swipe {
  width: 290px;
  margin: auto;
}
.van-swipe-item {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 300px;
  margin: auto;
  text-align: center;
  background-color: #fbfbfb;
}
.imgs {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* HTML: <div class="loader"></div> */
.loader {
  width: 40px;
  height: 40px;
  display: grid;
  animation: l6-0 1.5s infinite linear;
  margin: 5px;
}
.loader:before,
.loader:after {
  content: '';
  grid-area: 1/1;
  background: #fc8b01f6;
  animation:
    l6-1 1.5s infinite linear,
    l6-2 1.5s infinite linear;
}
.loader:after {
  --s: -1;
  animation-direction: reverse;
}
@keyframes l6-0 {
  0%,
  9%,
  91%,
  100% {
    background: #514b82;
  }
  10%,
  90% {
    background: #0000;
  }
}
@keyframes l6-1 {
  0%,
  33% {
    clip-path: polygon(0 0, 50% 100%, 100% 0, 100% 100%, 0 100%);
  }
  66%,
  100% {
    clip-path: polygon(50% 0, 50% 100%, 50% 0, 100% 100%, 0 100%);
  }
}
@keyframes l6-2 {
  0%,
  10%,
  90%,
  100% {
    transform: scale(var(--s, 1)) translateY(0);
  }
  33%,
  66% {
    transform: scale(var(--s, 1)) translateY(50%);
  }
}
</style>
<script>
export default {
  setup() {
    const images = [
      '/public/imgs/1.jpg',
      '/public/imgs/2.jpg',
      '/public/imgs/3.jpg',
      '/public/imgs/4.jpg'
    ]
    return { images }
  }

  // setup() {
  //   const state = reactive({
  //     images: []
  //   })

  //   onMounted(async () => {
  //     const goodClass = {
  //       type: '2',
  //       page: 1,
  //       size: 10
  //     }
  //     await stores.dispatch('axiosoriginGoodList', goodClass)
  //     console.log(stores.state.originGoodList.map((item) => item.images))
  //     state.images = stores.state.originGoodList.map((item) => JSON.parse(item.images))
  //   })

  //   return state
  // }
}
</script>
