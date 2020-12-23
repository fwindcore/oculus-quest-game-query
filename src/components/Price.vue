<template>
  <div>
    <h3 :style="{ color: color }" v-text="getPrice()"></h3>
  </div>
</template>

<script>
export default {
  props: {
    current_offer: {
      type: Object,
    },
  },
  data() {
    return {
      color: "blue",
    };
  },
  methods: {
    getPrice() {
      if (this.current_offer.price.offset_amount == "0") {
        this.color = "green";
        return "free";
      } else if (this.current_offer.promo_benefit) {
        this.color = "red";
        return `${this.current_offer.price.formatted}(${this.current_offer.promo_benefit})`;
      } else {
        this.color = "blue";
        return this.current_offer.price.formatted;
      }
    },
  },
};
</script>

<style>
</style>