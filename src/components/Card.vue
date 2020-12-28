<template>
  <div class="card">
    <van-card
      @click="onCardClicked"
      :price="getPrice(nodeData.current_offer.price.offset_amount)"
      :desc="relaceData"
      :title="nodeData.display_name"
      :thumb="getCoverUrl(nodeData.id)"
      :origin-price="originPrice"
      :lazy-load="false"
    >
      <template #tags>
        <tag-list :data="tagList"></tag-list>
      </template>
      <template #price-top>
        <van-row>
          <van-rate
            :value="nodeData.quality_rating_aggregate"
            allow-half
            readonly
            color="#ffd21e"
          ></van-rate>
          {{ nodeData.rating_count }}人评分
        </van-row>
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
import TagList from "@/components/TagList";
export default {
  components: { TagList },
  props: {
    nodeData: {
      type: Object,
    },
  },
  computed: {
    rate() {
      return this.$store.state.rate;
    },
    cardClickLink() {
      // return `https://www.oculus.com/experiences/quest/${this.nodeData.id}/`;
      return `/detail/${this.nodeData.id}`;
    },
    tagList() {
      let tagList = [];
      if (this.isChinese) {
        tagList.push({
          name: "中文",
          type: "primary",
        });
      }
      if (this.isDiscount) {
        tagList.push({
          name: "打折",
          type: "danger",
        });
      }
      if (this.isFree) {
        tagList.push({
          name: "免费",
          type: "success",
        });
      }

      return tagList;
    },
    isChinese() {
      return (
        this.nodeData.supported_in_app_languages.findIndex(
          (v) => v.name.indexOf("中文") > -1
        ) > -1
      );
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
      return `./detail/${id}/cover/square.jpg`;
    },

    getPrice(price) {
      // const rate = 6.53;
      if (price == "0") {
        return null;
      } else {
        return ((price * this.rate.USD) / 100).toFixed(2);
      }
    },
    getDate(seconds) {
      return dayjs.unix(seconds).format("YYYY-MM-DD");
    },
    timeRemain(seconds) {
      const relativeTime = require("dayjs/plugin/relativeTime");
      dayjs.extend(relativeTime);
      const endtime = dayjs.unix(seconds);
      return `剩余：${endtime.fromNow(true)}`;
    },
    onCardClicked() {
      // window.open(this.cardClickLink);
      this.$router.push(this.cardClickLink);
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