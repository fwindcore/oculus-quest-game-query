<template>
  <div id="scroller-box">
    <van-list @load="onLoad" :finished="finished" finished-text="没有更多了">
      <div v-for="item of showData" :key="item.id">
        <Card :nodeData="item"></Card>
      </div>
      <van-empty v-if="showData.length < 1" description="" />
    </van-list>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    keywords: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "all",
    },
    orderType: {
      type: String,
      default: "releaseData",
    },
  },
  components: { Card },
  data() {
    return {
      allData: [],
      filterType: [],
      offsetIndex: 0,
      pageItems: 20,
      finished: false,
      showBackTopIcon: true,
    };
  },
  computed: {
    isFree() {
      return this.type === "free";
    },
    isDiscount() {
      return this.type === "discount";
    },
    filtedData() {
      return this.data
        .filter((item) => {
          if (this.isDiscount && !item.current_offer.promo_benefit) {
            return false;
          }
          if (this.isFree && item.current_offer.price.formatted !== "$0.00") {
            return false;
          }
          if (
            this.type === "paid" &&
            item.current_offer.price.formatted === "$0.00"
          ) {
            return false;
          }

          const name = item.display_name.toLowerCase();
          return name.indexOf(this.keywords.toLowerCase()) != -1;
        })
        .sort((a, b) => {
          if (this.orderType === "name") {
            const nameA = a.display_name.toLowerCase();
            const nameB = b.display_name.toLowerCase();
            return nameA < nameB ? -1 : 1;
          } else if (this.orderType === "releaseData") {
            const releaseDataA = a.release_date;
            const releaseDataB = b.release_data;
            return releaseDataA - releaseDataB;
          } else if (this.orderType === "price") {
            const priceA = a.current_offer.price.offset_amount;
            const priceB = b.current_offer.price.offset_amount;
            return priceA - priceB;
          } else if (this.orderType === "endTime") {
            const endTimeA = a.current_offer.end_time;
            const endTimeB = b.current_offer.end_time;
            return endTimeA - endTimeB;
          } else if (this.orderType == "rate") {
            const rateA = a.quality_rating_aggregate;
            const rateB = b.quality_rating_aggregate;
            return rateB - rateA;
          } else if (this.orderType == "rateCount") {
            const countA = a.rating_count;
            const countB = b.rating_count;
            return countB - countA;
          }
          return 0;
        });
    },
    showData() {
      return this.filtedData.slice(0, this.offsetIndex);
    },
    itemCount() {
      return `列表数量：${this.showData.length}`;
    },
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
        if (this.offsetIndex > this.pageItems) {
          this.finished = true;
        }
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
    backTop() {},
  },
};
</script>

<style>
.backTop {
  color: aquamarine;
  position: absolute;
  bottom: 100px;
}
</style>