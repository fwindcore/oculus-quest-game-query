<template>
  <div>
    <img :src="getCoverUrl(nodeData.id)" />
    <h1>{{ nodeData.display_name }}</h1>
    <Price :current_offer="nodeData.current_offer"></Price>
  </div>
</template>

<script>
import Price from "@/components/Price";
export default {
  components: { Price },
  props: {
    nodeData: {
      type: Object,
    },
  },
  methods: {
    getCoverUrl(id) {
      return `/cover/${id}/landscape.jpg`;
    },
  },
};
</script>

<style>
</style>