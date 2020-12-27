<template>
  <div>
    <div>
      <h1>Oculus Quest 游戏查询</h1>
    </div>
    <div>
      <ScrollTop></ScrollTop>
      <van-search v-model="keywords" placeholder="请输入搜索关键词" />
      <van-sticky>
        <van-dropdown-menu active-color="#1989fa">
          <van-dropdown-item
            v-model="dataType"
            :options="dataTypeList"
            @change="onDataTypeChanged"
          />
          <van-dropdown-item v-model="orderType" :options="orderTypeList" />
        </van-dropdown-menu>
      </van-sticky>
      <van-row v-if="!loaded">
        <van-skeleton v-for="i in 4" :key="i" title avatar :row="3">
        </van-skeleton>
      </van-row>
      <list
        v-else
        :data="allData"
        :keywords="keywords"
        :type="dataType"
        :orderType="orderType"
      ></list>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import { getStoreData, getRate } from "@/apis/index.js";
import ScrollTop from "@/components/ScrollTop";
export default {
  name: "App",
  components: {
    List,
    ScrollTop,
  },
  data() {
    return {
      dataLoaded: false,
      rateLoaded: false,
      allData: [],
      filterType: [],
      keywords: "",
      isFree: false,
      isDiscount: false,
      offsetIndex: 0,
      pageItems: 20,
      finished: false,
      rate: {
        USD: 6.53,
      },
      dataType: "all",
      orderType: "releaseData",
      dataTypeList: [
        { text: "全部", value: "all" },
        { text: "免费", value: "free" },
        { text: "收费", value: "paid" },
        { text: "打折", value: "discount" },
      ],
      orderTypeListAll: [
        { text: "发售日期排序", value: "releaseData" },
        { text: "名称排序", value: "name" },
        { text: "价格排序", value: "price" },
        { text: "截止时间排序", value: "endTime" },
        { text: "评分排序", value: "rate" },
        { text: "评分人数排序", value: "rateCount" },
      ],
    };
  },
  provide() {
    return {
      rate: this.rate,
    };
  },
  computed: {
    loaded() {
      return this.dataLoaded & this.rateLoaded;
    },
    orderTypeList() {
      if (this.dataType === "free") {
        return this.orderTypeListAll.filter(
          (v) => !["price", "endTime"].includes(v.value)
        );
      } else if (this.dataType === "discount") {
        return this.orderTypeListAll;
      } else {
        return this.orderTypeListAll.filter(
          (v) => !["endTime"].includes(v.value)
        );
      }
    },
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
      this.dataLoaded = true;
    });
    getRate().then((res) => {
      if (res) {
        this.rate.USD = res.data.data.rate;
      } else {
        this.rate.USD = 6.53;
      }
      this.rateLoaded = true;
    });
  },
  methods: {
    onDataTypeChanged(v) {
      if (v === "discount") {
        this.orderType = "endTime";
      } else {
        this.orderType = "releaseData";
      }
    },
  },
};
</script>

<style>
</style>
