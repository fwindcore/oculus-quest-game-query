<template>
  <van-row :gutter="options.gutter">
    <van-col v-for="(item, index) of data" :key="index">
      <van-tag :type="item.type">{{ item.name }}</van-tag></van-col
    >
  </van-row>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        gutter: 2,
      }),
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>