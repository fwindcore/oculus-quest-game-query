<template>
  <div>
    <div :class="{ more: showMore, all: !showMore }">{{ textShow }}</div>
    <div class="more-link" v-if="showMore">
      <a @click="onShowMoreClick">更多</a>
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
    maxLine: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    isLongText() {
      return this.text.length > 10 * this.maxLine;
    },
    textShow() {
      return this.text;
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
      this.showMore = false;
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