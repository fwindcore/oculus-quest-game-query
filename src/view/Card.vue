<template>
  <div class="card">
    <van-card
      :thumb-link="cardClickLink"
      :price="getPrice(nodeData.current_offer.price.offset_amount)"
      :desc="relaceData"
      :title="nodeData.display_name"
      :thumb="getCoverUrl(nodeData.id)"
      :origin-price="originPrice"
      :lazy-load="false"
    >
      <template #tags>
        <van-tag v-if="isFree" plain type="success">免费</van-tag>
        <van-tag v-if="isDiscount" plain type="danger">打折</van-tag>
      </template>
      <template #num>
        <van-tag type="danger" v-if="isDiscount">
          <template>
            <div style="text-align: center">
              <div>{{ nodeData.current_offer.promo_benefit }}</div>
              <div style="font-size: 0.5rem">
                {{ timeRemain(nodeData.current_offer.end_time) }}
              </div>
            </div>
          </template>
        </van-tag>
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
    cardClickLink() {
      return `https://www.oculus.com/experiences/quest/${this.nodeData.id}/`;
    },
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
      return `./cover/${id}/square.jpg`;
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
    timeRemain(seconds) {
      dayjs.locale("zh-cn");
      const relativeTime = require("dayjs/plugin/relativeTime");
      dayjs.extend(relativeTime);
      const endtime = dayjs.unix(seconds);
      return endtime.fromNow(true);
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