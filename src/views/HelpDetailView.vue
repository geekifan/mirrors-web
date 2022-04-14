<template>
<div>
  <el-skeleton :loading="!showContent" :rows="12" :throttle="200">
    <template>
      <div v-html="markdownToHtml" class="markdown"></div>
    </template>
  </el-skeleton>
</div>

</template>
<script>
import { marked } from "marked";
import { requestUrl } from "@/api/api.js";

export default {
  name: "MarkDownView",
  mounted() {
    this.url = this.$GLOBAL.helpMarkDownRootPath + '/' + this.$route.params.name + ".md"
    requestUrl(this.url).then((res) => {
      this.markdown = res
      this.showContent = true
    });
  },
  data() {
    return {
      markdown: "",
      showContent: false,
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
