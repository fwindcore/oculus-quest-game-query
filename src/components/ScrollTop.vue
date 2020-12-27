<template>
  <!--transition标签 按钮出现附带动画-->
  <transition name="el-fade-in">
    <!-- <div class="page-component-up" @click="scrollToTop" v-show="true"> -->
    <!-- <i class="el-icon-caret-top" @click="handleScroll"></i> -->
    <!-- <van-button icon="plus" type="primary" /> -->
    <!-- </div> -->
    <div class="page-component-up" @click="scrollToTop" v-show="true">
      <van-icon class="el-icon-caret-top" name="back-top"></van-icon>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      toTopShow: false,
    };
  },
  computed: {
    scrollSize() {
      return (
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYoffset
      );
    },
  },
  methods: {
    handleScroll() {
      // console.log("handleScroll");
      // //id scroller-box是自己在组件上添加的，为了方便获取dom
      // this.scrollTop = document.documentElement.scrollTop;
      // if (this.scrollTop > 300) {
      //   this.toTopShow = true;
      // } else {
      //   this.toTopShow = false;
      // }
    },
    scrollToTop() {
      console.log("scroll to top");
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.getElementById("scroller-box").children[0].scrollTop = 0;
      // let timer = null,
      //   _that = this;
      // //动画，使用requestAnimationFrame代替setInterval
      // cancelAnimationFrame(timer);
      // timer = requestAnimationFrame(function fn() {
      //   if (_that.scrollTop > 0) {
      //     _that.scrollTop -= 50;
      //     document.documentElement.scrollTop = _that.scrollTop;
      //     //   document.getElementById("scroller-box").scrollTop = 0;
      //     document.body.scrollTop = 0;
      //     timer = requestAnimationFrame(fn);
      //   } else {
      //     cancelAnimationFrame(timer);
      //     _that.toTopShow = false;
      //   }
      // });
    },
  },
  mounted() {
    // //$nextTick 避免dom未加载
    // this.$nextTick(function () {
    //   let targetScroll = document.body;
    //   console.log("targetScroll", targetScroll);
    //   console.log("scrollSize", this.scrollSize);
    //   targetScroll.addEventListener("scroll", this.handleScroll);
    // });
  },
  destroyed() {
    // let targetScroll = document.getElementById("scroller-box");
    // targetScroll.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped lang="less">
.page-component-up {
  background-color: #409eff;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  z-index: 100;
  .el-icon-caret-top {
    color: #fff;
    display: block;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
  }
  p {
    display: none;
    text-align: center;
    color: #fff;
  }
  &:hover {
    opacity: 0.8;
  }
}
</style>