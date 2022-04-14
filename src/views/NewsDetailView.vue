<template>
<div>
  <div>
    <i class="el-icon-back" style="padding-right: 5px"></i>
    <a @click="$router.push($GLOBAL.newsRootPath)">返回</a>
  </div>
  <el-skeleton :loading="!showContent" :rows="12" :throttle="200">
    <template>
      <div v-html="markdownToHtml" class="markdown"></div>
    </template>
  </el-skeleton>
</div>

</template>
<script>
import { marked } from "marked"
import { requestUrl } from "@/api/api.js"

export default {
  name: "NewsDetailView",
  mounted() {
    this.url = this.$GLOBAL.newsMarkDownRootPath + "/" + this.$route.params.name + ".md"
    requestUrl(this.url).then((res) => {
      this.markdown = res
      this.showContent = true
    });
  },
  data() {
    return {
      markdown: "",
      showContent: false
    };
  },
  computed: {
    markdownToHtml() {
      return marked.parse(this.markdown)
    },
  },
};
</script>

<style scoped src="@/styles/markdown.css" />
