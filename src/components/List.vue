<template>
  <div id="scroller-box">
    <van-list @load="onLoad" :finished="finished" finished-text="没有更多了">
      <div v-for="item of showData" :key="item.node.id">
        <Card :nodeData="item.node"></Card>
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
      default: [],
    },
    keywords: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "all",
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
      return this.data.filter((item) => {
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

#scroller-box {
  /* height: 500px; */
  /* overflow-y: auto; */
}
</style>