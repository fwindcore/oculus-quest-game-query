<template>
  <div class="detail">
    <van-sticky>
      <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>
    <div v-if="loaded">
      <van-swipe class="my-swipe" :autoplay="10000" indicator-color="white">
        <van-swipe-item v-for="index of 5" :key="index">
          <van-image :src="getScreenshotUrl(index)"></van-image>
        </van-swipe-item>
      </van-swipe>

      <div class="content">
        <van-row>
          <van-col span="18">
            <div class="title">{{ appDetail.display_name }}</div>
          </van-col>
          <van-col span="6">
            <price
              :currentOffer="appDetail.current_offer"
              @click.native="gotoOculus"
            ></price>
          </van-col>
        </van-row>

        <div class="rate">
          <van-row gutter="20" type="flex">
            <van-col>
              <van-rate
                v-model="appDetail.quality_rating_aggregate"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
                allow-half
                readonly
              />
            </van-col>
            <van-col>
              <div class="rating-count">{{ ratingNum }}次评分</div>
            </van-col>
          </van-row>
        </div>
        <div class="description van-hairline--top">
          <van-row>
            <TextMore :text="appDetail.display_long_description"></TextMore>
          </van-row>
        </div>

        <van-cell-group>
          <van-cell title="发布日期" :value="releaseData" />
          <van-cell title="游戏模式" :value="gameMode" />
          <van-cell title="类型" :value="genreNames" />
          <van-cell title="语言" :value="appLanguages" />
          <van-cell title="开发者" :value="appDetail.developer_name" />
          <van-cell title="发行商" :value="appDetail.publisher_name" />
          <van-cell title="安装体积" :value="totalInstalledSpace" />
          <van-cell title="所需空间" :value="requiredSpaceAdjusted" />
          <van-cell
            title="最新版本"
            :value="appDetail.latest_supported_binary.version"
          />

          <van-cell
            title="更新记录"
            :label="appDetail.latest_supported_binary.change_log || '无'"
          />
        </van-cell-group>
      </div>
    </div>
    <div v-else>
      <van-empty></van-empty>
    </div>
  </div>
</template>

<script>
import { getAppDetail } from "@/apis";
import { getDateFromSeconds } from "@/utils";
import filesize from "filesize";
import NProgress from "nprogress";
import Price from "@/components/Price.vue";
import TextMore from "@/components/TextMore";

export default {
  components: { Price, TextMore },
  data() {
    return {
      appDetail: {},
      loaded: false,
    };
  },
  computed: {
    title() {
      return this.appDetail.display_name || "";
    },
    ratingNum() {
      let num = 0;
      this.appDetail.quality_rating_histogram_aggregate_all.forEach(
        (v) => (num += v.count)
      );
      return num;
    },
    releaseData() {
      return getDateFromSeconds(this.appDetail.release_date);
    },
    genreNames() {
      return this.appDetail.genre_names.join("、");
    },
    //游戏模式
    gameMode() {
      return this.appDetail.user_interaction_mode_names.join("、");
    },
    //支持的游戏语言
    appLanguages() {
      return this.appDetail.supported_in_app_languages
        .map((v) => v.name)
        .join("、\n");
    },
    //游戏体积
    totalInstalledSpace() {
      return filesize(
        this.appDetail.latest_supported_binary.total_installed_space
      );
    },
    requiredSpaceAdjusted() {
      return filesize(
        this.appDetail.latest_supported_binary.required_space_adjusted
      );
    },
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log("beforeRouteUpdate", to, from);
    this.loadAppinfo();
    next();
  },
  watch: {
    $route(to) {
      if (to.name == "Detail") {
        this.loadAppinfo();
      }
    },
  },
  created() {
    this.loadAppinfo();
  },
  methods: {
    loadAppinfo() {
      this.loaded = false;
      NProgress.start();
      getAppDetail(this.$route.params.id).then((res) => {
        this.appDetail = res.data.data.node;
        this.loaded = true;

        NProgress.done();
      });
    },
    getScreenshotUrl(index) {
      return `./detail/${this.$route.params.id}/screenshots/${index - 1}.jpg`;
    },
    gotoOculus() {
      window.open(
        `https://www.oculus.com/experiences/quest/${this.$route.params.id}/`
      );
    },
    onClickLeft() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  -webkit-user-select: auto;
  white-space: pre-wrap;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 750px;
}
.content {
  padding: 5px;
}
.title {
  font-size: 32px;
}
.rating-count {
  color: rgba(12, 12, 12, 0.9);
}
.description {
  word-break: break-word;
  overflow-y: auto;
  position: relative;
  -webkit-user-select: auto;
  white-space: pre-wrap;
  box-sizing: border-box;
  margin: 16px auto;
  max-width: 720px;
  padding: 10px 8px;
  width: 100%;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>
