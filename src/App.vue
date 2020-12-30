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
      this.$store.commit("updateRate", res.data);
      this.loaded = true;
    });
    dayjs.locale(locale_cn);
  },
};
</script>

