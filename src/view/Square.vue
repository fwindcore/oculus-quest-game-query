<template>
  <div id="app2">
    <h1>Oculus Quest 游戏列表</h1>
    <div>
      <van-search v-model="keywords" placeholder="请输入搜索关键词" />
      <van-row type="flex" justify="center" gutter="20">
        <van-checkbox v-model="isFree" name="free">免费</van-checkbox>
        <van-checkbox v-model="isDiscount" name="discount">打折</van-checkbox>
      </van-row>
    </div>
    <van-list>
      <div v-for="item of showData" :key="item.node.id">
        <Card :nodeData="item.node"></Card>
      </div>
    </van-list>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { getStoreData } from "@/apis/index.js";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      allData: [],
      filterType: [],
      keywords: "",
      isFree: false,
      isDiscount: true,
    };
  },
  computed: {
    showData() {
      return this.allData.filter((item) => {
        if (this.isDiscount && !item.node.current_offer.promo_benefit) {
          return false;
        }
        if (
          this.isFree &&
          item.node.current_offer.price.formatted !== "$0.00"
        ) {
          return false;
        }
        const name = item.node.display_name.toLowerCase();
        return name.indexOf(this.keywords.toLowerCase()) != -1;
      });
    },
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
} */
/* .input {
  max-width: 100%;
  outline: 0px;
  position: relative;
  appearance: none;
  transition: all 0.2s ease 0s;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
} */
</style>
