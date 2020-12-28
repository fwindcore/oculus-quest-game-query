<template>
  <div id="app">
    <keep-alive v-if="loaded">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import locale_cn from "dayjs/locale/zh-cn";
import dayjs from "dayjs";
import { getRate } from "@/apis";
export default {
  data() {
    return {
      loaded: false,
    };
  },
  created() {
    getRate().then((res) => {
      console.log("get rate", res);
      // if (res) {
      //   this.$store.commit("updateRate", res.data.data.rate);
      // }
      // this.$store.commit("updateRate", 2);
      this.$store.commit("updateRate", { USD: res.data.data.rate });
      this.loaded = true;
    });
    dayjs.locale(locale_cn);
  },
};
</script>

