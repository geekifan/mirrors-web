<template>
  <div>
    <div class="title">{{ $t("news.news-list") }}</div>
    <el-skeleton animated :loading="!showNewsList" :rows="12" :throttle="200">
      <template>
        <el-table :data="newsList" style="width: 100%">
          <el-table-column :label="$t('news.title')" min-width="100">
            <template slot-scope="scope">
              <span>
                <a @click="pushNewsRoute(scope.row.url)">{{ scope.row.title }}</a>
              </span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('news.date')" width="150">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px; margin-right: 10px">{{
                scope.row.date
              }}</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
import { newsList } from "@/api/api.js"

export default {
  name: "NewsView",
  created() {
    document.title = this.$GLOBAL.newsTitle
    newsList().then((res) => {
      this.newsList = res
      this.showNewsList = true
    });
  },
  data() {
    return {
      newsList: [],
      showNewsList: false,
    };
  },
  methods: {
    pushNewsRoute(url) {
      this.$router.push({path: this.$GLOBAL.newsRootPath + "/" + url})
    }
  }
};
</script>
