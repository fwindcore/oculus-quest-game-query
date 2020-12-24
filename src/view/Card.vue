<template>
  <div class="card" @click="onCardClicked(nodeData.id)">
    <van-card
      :tag="tag"
      :price="getPrice(nodeData.current_offer.price.offset_amount)"
      :desc="relaceData"
      :title="nodeData.display_name"
      :thumb="getCoverUrl(nodeData.id)"
      :origin-price="originPrice"
      :lazy-load="true"
    >
      <template #tags>
        <van-tag v-if="isFree" plain type="success">免费</van-tag>
        <van-tag v-if="isDiscount" plain type="danger">打折</van-tag>
      </template>
      <template #num>
        <van-tag v-if="isDiscount" type="danger">{{
          nodeData.current_offer.promo_benefit
        }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    nodeData: {
      type: Object,
    },
  },
  computed: {
    isDiscount() {
      return this.nodeData.current_offer.promo_benefit ? true : false;
    },
    isFree() {
      return this.nodeData.current_offer.price.offset_amount == "0";
    },
    tag() {
      if (this.isDiscount) {
        return "打折";
      } else if (this.isFree) {
        return "免费";
      } else {
        return null;
      }
    },
    relaceData() {
      return `发售日期：${this.getDate(this.nodeData.release_date)}`;
    },
    originPrice() {
      if (this.isDiscount) {
        return this.getPrice(
          this.nodeData.current_offer.strikethrough_price.offset_amount
        );
      } else {
        return null;
      }
    },
  },
  methods: {
    getCoverUrl(id) {
      return `/cover/${id}/square.jpg`;
    },
    onCardClicked(id) {
      window.open(`https://www.oculus.com/experiences/quest/${id}/`);
    },
    getPrice(price) {
      const rate = 6.53;
      if (price == "0") {
        return null;
      } else {
        return ((price * rate) / 100).toFixed(2);
      }
    },
    getDate(seconds) {
      return dayjs.unix(seconds).format("YYYY-MM-DD");
    },
  },
};
</script>

<style>
.card {
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 10px auto;
  max-width: 720px;
}
.img {
  border-radius: 5px;
  max-width: 100%;
}
</style>