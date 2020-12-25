<template>
  <div>
    <h2 style="text-align: center">Oculus Quest 游戏查询</h2>
    <square></square>
  </div>
</template>

<script>
import locale_cn from "dayjs/locale/zh-cn";
import dayjs from "dayjs";
import Square from "@/view/Square";
export default {
  components: { Square },
  created() {
    dayjs.locale(locale_cn);
  },
};
</script>

<style>
</style>