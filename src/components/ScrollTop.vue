<template>
  <div class="page-component-up" @click="scrollToTop">
    <van-icon class="el-icon-caret-top" name="back-top"></van-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    scrollToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
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