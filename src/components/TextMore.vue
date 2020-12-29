<template>
  <div>
    <div :class="{ more: showMore, all: !showMore }">{{ text }}</div>
    <div class="more-link">
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
  },
  watch: {
    text(v) {
      if (v.length > 10) {
        this.showMore = true;
      } else {
        this.showMore = false;
      }
    },
  },
  data() {
    return {
      showMore: true,
    };
  },
  methods: {
    onShowMoreClick() {
      this.showMore = !this.showMore;
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