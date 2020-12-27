<template>
  <div>
    <van-button :type="isDiscount ? 'danger' : 'primary'" size="large">
      <span class="current-price">{{ currentPrice }}</span>
      <span class="origin-price">{{ originPrice }}</span>
      <!-- <span class="promo-benefit">{{ promoBenefit }}</span> -->
    </van-button>
  </div>
</template>

<script>
import { getRatedPrice } from "@/utils";
export default {
  props: {
    currentOffer: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    rate() {
      return this.$store.state.rate;
    },
    isDiscount() {
      return this.currentOffer.promo_benefit ? true : false;
    },
    isFree() {
      return this.currentOffer.price.offset_amount == "0";
    },
    currentPrice() {
      return this.isFree
        ? "免费"
        : "¥" + getRatedPrice(this.currentOffer.price.offset_amount, this.rate);
    },
    originPrice() {
      return this.isDiscount
        ? "¥" +
            getRatedPrice(
              this.currentOffer.strikethrough_price.offset_amount,
              this.rate
            )
        : "";
    },
    promoBenefit() {
      return this.isDiscount ? this.currentOffer.promo_benefit : "";
    },
  },
};
</script>

<style>
.current-price {
  color: #eee;
  font-weight: 500;
}
.origin-price {
  display: inline-block;
  margin-left: 5px;
  color: #ccc;
  font-size: 10px;
  text-decoration: line-through;
}
</style>