<template>
  <div class="card" @click="onCardClicked(nodeData.id)">
    <h2>{{ nodeData.display_name }}</h2>
    <Price :current_offer="nodeData.current_offer"></Price>
    <img :src="getCoverUrl(nodeData.id)" class="img" />
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
    onCardClicked(id) {
      window.open(`https://www.oculus.com/experiences/quest/${id}/`);
    },
  },
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
}
.img {
  border-radius: 5px;
  max-width: 100%;
}
</style>