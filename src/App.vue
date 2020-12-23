<template>
  <div id="app">
    <div v-for="item of allData" :key="item.node.id">
      <Card :nodeData="item.node"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import { getStoreData } from "./apis/index.js";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      allData: [],
    };
  },
  created() {
    getStoreData().then((res) => {
      console.log("get store data", res);
      this.allData = res.data.data.node.all_items.edges;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
