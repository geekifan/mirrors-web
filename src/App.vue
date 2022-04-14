<template>
  <div id="app" v-cloak>
    <el-container>
      <el-header>
        <div id="header">
          <nav>
            <router-link :to="$GLOBAL.mirrorRootPath" class="router" style="margin-right: 10px">{{
              $t("header.home")
            }}</router-link>
            <router-link :to="$GLOBAL.helpRootPath" class="router" style="margin-left: 10px">{{
              $t("header.help")
            }}</router-link>
            <router-link :to="$GLOBAL.newsRootPath" class="router" style="margin-left: 10px">{{
              $t("header.news")
            }}</router-link>
            <a id="i18n" @click="changeLocale">中文 / English</a>
          </nav>
          <div id="top">
            <h1>{{ $t("header.title") }}</h1>
          </div>
        </div>
      </el-header>
      <div id="warp">
        <transition name="transition-router" mode="out-in">
          <router-view id="main"/>
        </transition> 
      </div>
      <el-footer>
        <Footer id="footer"></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import moment from "moment"
import "element-ui/lib/theme-chalk/display.css"

export default {
  name: "app",
  created() {
    if (localStorage.locale) {
      this.$i18n.locale = localStorage.locale
      document.documentElement.setAttribute("lang", localStorage.locale)
      if (localStorage.locale === "zh")
        moment.locale("zh-cn")
      else 
        moment.locale(localStorage.locale)
    } else {
      this.$i18n.locale = "zh"
      localStorage.locale = "zh"
      moment.locale("zh-cn")
      document.documentElement.setAttribute("lang", "zh")
    }
  },
  methods: {
    changeLocale() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "zh"
        localStorage.locale = "zh"
        moment.locale("zh-cn")
        document.documentElement.setAttribute("lang", "zh")
      } else {
        this.$i18n.locale = "en"
        localStorage.locale = "en"
        moment.locale("en")
        document.documentElement.setAttribute("lang", "en")
      }
    },
  },
  components: {
    Footer,
  },
};
</script>

<style src="@/styles/global.css" />
