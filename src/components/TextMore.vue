<template>
  <div>
    <div :class="{ more: showMore, all: !showMore }" ref="textDom">
      {{ text }}
    </div>
    <div class="more-link" v-show="btnShow">
      <a @click="onShowMoreClick" v-text="moreText"></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  computed: {
    moreText() {
      return this.showMore ? "展开" : "收起";
    },
    // btnShow() {
    //   return this.text.length > 20;
    // },
  },

  data() {
    return {
      showMore: true,
      btnShow: false,
    };
  },
  mounted() {
    // 判断详情是否溢出
    this.textDom = this.$refs.textDom;
    this.checkDetailBtnShow();
    window.addEventListener("resize", this.checkDetailBtnShow);
  },
  methods: {
    onShowMoreClick() {
      this.showMore = !this.showMore;
    },
    checkDetailBtnShow() {
      this.$nextTick(() => {
        this.textDom = this.$refs.textDom;
        this.btnShow = this.textDom.clientHeight < this.textDom.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
.more {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  -moz-appearance: 4;
}
.all {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.more-link {
  margin-top: 10px;
  text-decoration: underline;
}
</style>