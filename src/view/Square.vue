<template>
  <div>
    <div>
      <ScrollTop></ScrollTop>
      <van-search v-model="keywords" placeholder="请输入搜索关键词" />
      <van-tabs animated swipeable>
        <van-tab title="全部">
          <list :data="allData" :keywords="keywords" type="all"></list>
        </van-tab>
        <van-tab title="免费">
          <list :data="allData" :keywords="keywords" type="free"></list>
        </van-tab>
        <van-tab title="打折">
          <list :data="allData" :keywords="keywords" type="discount"></list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import { getStoreData } from "@/apis/index.js";
import ScrollTop from "@/components/ScrollTop";
export default {
  name: "App",
  components: {
    List,
    ScrollTop,
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
    itemCount() {
      return `列表数量：${this.showData.length}`;
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
</style>
