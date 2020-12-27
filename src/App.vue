<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/detail">detail</router-link>
    </div> -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import locale_cn from "dayjs/locale/zh-cn";
import dayjs from "dayjs";
export default {
  created() {
    dayjs.locale(locale_cn);
  },
};
</script>

