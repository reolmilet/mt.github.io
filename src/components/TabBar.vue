<template>
  <div class="TabBar" ref="scroll" @touchend="scroll">
    <div v-for="(item, i) in menuList" :key="i" :data-id="i">
      <div class="liitleBox" :class="{ active: i == index }">
        <img :src="item.imgURL" alt="" class="imgin" />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: -1,
      menuList: [
        {
          title: '时令水果',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg'
        },
        {
          title: '酒水冲调',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg'
        },
        {
          title: '安心乳品',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg'
        },
        {
          title: '休闲零食',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg'
        },
        {
          title: '肉蛋食材',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg'
        },
        {
          title: '新鲜蔬菜',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg'
        },
        {
          title: '熟食餐饮',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg'
        },
        {
          title: '海鲜水产',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg'
        },
        {
          title: '粮油调味',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg'
        },
        {
          title: '某手美食',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg'
        },
        {
          title: '纸杯清洁',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg'
        },
        {
          title: '个人护理',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg'
        },
        {
          title: '美妆护肤',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg'
        },
        {
          title: '家居收纳',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg'
        },
        {
          title: '家用电器',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg'
        },
        {
          title: '3C数码',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg'
        },
        {
          title: '母婴用品',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg'
        },
        {
          title: '鲜花绿植',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg'
        },
        {
          title: '宠物用品',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg'
        },
        {
          title: '图书玩具',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg'
        },
        {
          title: '手表配饰',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg'
        }
      ]
    }
  },
  methods: {
    scroll(e) {
      if (e.target.dataset.id) {
        this.index = e.target.dataset.id
      } else if (e.target.parentNode.dataset.id) {
        this.index = e.target.parentNode.dataset.id
      } else if (e.target.parentNode.parentNode.dataset.id) {
        this.index = e.target.parentNode.parentNode.dataset.id
      }
      this.$emit('change', this.menuList[this.index].title)
      const left = e.target.getBoundingClientRect().left
      const littlewidth = e.target.offsetWidth
      const bigwidth = this.$refs.scroll.offsetWidth
      const changex = left - bigwidth / 2 + littlewidth / 2

      this.move(this.$refs.scroll.scrollLeft, changex)
    },
    move(start, changex) {
      let changed = 0
      let speed = 5
      if (changex < 0) {
        speed *= -1
      }
      const timer = setInterval(() => {
        changed += speed
        this.$refs.scroll.scrollLeft = start + changed
        if (Math.abs(changed) >= Math.abs(changex)) {
          this.$refs.scroll.scrollLeft = start + changex
          clearInterval(timer)
        }
      }, 2)
    }
  }
}
</script>
<style>
.liitleBox {
  width: 50px;
  float: left;
  text-align: center;
  padding: 5px;
  font-size: 10px;
}
.TabBar {
  margin: 0;
  padding: 0;
  height: 73px;
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  /* 横向滚动 */
  justify-content: space-around;
}
.TabBar::-webkit-scrollbar {
  width: 0px;
  background: none;
}
/* 隐藏滚动条 */
.imgin {
  border-radius: 20px;
}
.active {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.473);
}
/* 加入阴影 */
</style>
