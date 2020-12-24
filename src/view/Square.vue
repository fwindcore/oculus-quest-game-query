<template>
  <div>
    <div>
      <van-search v-model="keywords" placeholder="请输入搜索关键词" />
      <van-row type="flex" justify="center" gutter="20">
        <van-checkbox v-model="isFree" name="free">免费</van-checkbox>
        <van-checkbox v-model="isDiscount" name="discount">打折</van-checkbox>
      </van-row>
    </div>
    <van-list @load="onLoad">
      <div v-for="item of showData" :finished="finished" :key="item.node.id">
        <Card :nodeData="item.node"></Card>
      </div>
    </van-list>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
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
      isDiscount: false,
      offsetIndex: 0,
      pageItems: 20,
      finished: false,
    };
  },
  computed: {
    filtedData() {
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
    showData() {
      return this.filtedData.slice(0, this.offsetIndex);
    },
  },
  created() {
    getStoreData().then((res) => {
      console.log("get store data", res);
      this.allData = res.data.data.node.all_items.edges;
      this.onLoad();
    });
  },
  watch: {
    filtedData() {
      this.offsetIndex = this.pageItems;
      this.updateOffesetIndex();
    },
  },
  methods: {
    updateOffesetIndex() {
      if (this.offsetIndex >= this.filtedData.length) {
        this.offsetIndex = this.filtedData.length;
        this.finished = true;
      } else {
        this.finished = false;
      }
    },
    onLoad() {
      if (this.offsetIndex < this.filtedData.length) {
        this.offsetIndex += this.pageItems;
      }
      this.updateOffesetIndex();
    },
  },
};
</script>

<style>
</style>
