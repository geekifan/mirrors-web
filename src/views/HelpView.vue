<template>
  <div>
    <div class="title"> {{ $t("help.help") }} </div>
    <el-row>
      <el-col :xs="0" :sm="4" class="hidden-sm-and-down tab-container">
        <span>
          <router-link :to="getUrl('welcome')" class="tab-item"> {{ $t("help.welcome") }} </router-link>
        </span>
        <span v-for="(item, index) in helps" :key="index">
          <router-link :to="getUrl(item)" class="tab-item" >
            {{ item }}
          </router-link>
        </span>
      </el-col>
      <el-col :sm="24" :md="20" class="help-detail">
        <div class="hidden-md-and-up">
          <div style="padding-bottom: 10px"> {{ $t("help.choose") }} </div>
          <el-select v-model="selectValue" :placeholder="$t('help.choose-placeholder')" style="width: 100%; margin-bottom: 15px;">
            <el-option :label="$t('help.welcome')" value="welcome"> </el-option>
            <div v-for="(item, index) in helps" :key="index">
              <el-option :label="item" :value="item">
              </el-option>
            </div>
          </el-select>
        </div>
        <transition name="transition-router" mode="out-in">
          <router-view :key="$route.fullPath"></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { marked } from "marked"
import { info } from "@/api/api.js"

export default {
  name: "App",
  created() {
    document.title = this.$GLOBAL.helpTitle
    info().then( res => {
      this.helps = res.helps
    })
  },
  data() {
    return {
      markdown: "# Hello World",
      activeTab: 0,
      helps: [],
    };
  },
  computed: {
    markdownToHtml() {
      return marked.parse(this.$route.params.name);
    },
    selectValue: {
      set(value) {
        this.$router.push(this.$GLOBAL.helpRootPath + "/" + value)
      },
      get() {
        return this.$route.params.name
      },
    },
  },
  methods: {
    getUrl(name) {
      return this.$GLOBAL.helpRootPath + "/" + name
    },
  },
};
</script>

<style scoped src="@/styles/help.css"/>
