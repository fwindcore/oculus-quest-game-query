<template>
  <div class="detail">
    <div v-if="loaded">
      <h1>{{ appDetail.display_name }}</h1>
    </div>
    <div v-else>
      <h1>loading...</h1>
    </div>
  </div>
</template>

<script>
import { getAppDetail } from "@/apis";
export default {
  data() {
    return {
      appDetail: {},
      loaded: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log("beforeRouteUpdate", to, from);
    this.loadAppinfo();
    next();
  },
  created() {
    this.loadAppinfo();
  },
  methods: {
    loadAppinfo() {
      this.loaded = false;
      getAppDetail(this.$route.params.id).then((res) => {
        this.appDetail = res.data.data.node;
        this.loaded = true;
      });
    },
  },
};
</script>
