<template>
  <div>
    <el-col>
      <el-row>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix side-panel-title">
            <span><i class="el-icon-s-flag"></i>{{ $t("side-panel.news") }}</span>
          </div>
          <el-skeleton :loading="!showContent" animated>
            <template>
              <div class="text item" v-for="(item, index) in newsList.slice(0, 4)" :key="index">
                <a @click="pushNewsRoute(item.url)"> {{ item.title }} </a>
              </div>
              <div class="text item">
                <i class="el-icon-right"></i>
                <a @click="pushNewsRoute('')">{{ $t("side-panel.news-more") }}</a>
              </div>
            </template>
          </el-skeleton>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix side-panel-title">
            <span><i class="el-icon-download"></i>{{ $t("side-panel.download") }}</span>
          </div>
          <div class="text item" style="margin-bottom: 10px">
            {{ $t("side-panel.download-content") }}
          </div>
          <el-button type="primary" @click="modalBecomeVisible">
            {{ $t("side-panel.download-button") }}</el-button>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix side-panel-title">
            <span><i class="el-icon-discover"></i>{{ $t("side-panel.route") }}</span>
          </div>
          <table>
            <tr>
              <td>
                <a href="https://mirrors.jlu.edu.cn/"><i class="el-icon-link"></i>mirrors.jlu.edu.cn</a>
              </td>
              <td style="text-align: right">
                {{ $t("side-panel.route-auto") }}
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://mirrors4.jlu.edu.cn/"><i class="el-icon-link"></i>mirrors4.jlu.edu.cn</a>
              </td>
              <td style="text-align: right">{{ $t("side-panel.route-v4") }}</td>
            </tr>
            <tr>
              <td>
                <a href="https://mirrors6.jlu.edu.cn/"><i class="el-icon-link"></i>mirrors6.jlu.edu.cn</a>
              </td>
              <td style="text-align: right">{{ $t("side-panel.route-v6") }}</td>
            </tr>
          </table>
        </el-card>
      </el-row>
      <el-row>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix side-panel-title">
            <span><i class="el-icon-connection"></i>{{ $t("side-panel.links") }}</span>
          </div>
          <table>
            <tr>
              <td>
                <a @click="pushHelpRoute('')" target="_blank">
                  <i class="el-icon-link"></i>
                  {{ $t("side-panel.help") }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/jlulug/issues/issues/new/choose" target="_blank">
                  <i class="el-icon-link"></i>
                  {{ $t("side-panel.mirror-request") }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/jlulug/issues/issues/new/choose" target="_blank">
                  <i class="el-icon-link"></i>
                  {{ $t("side-panel.report-problem") }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://jlulug.org" target="_blank">
                  <i class="el-icon-link"></i>
                  {{ $t("side-panel.jlulug") }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://nic.jlu.edu.cn" target="_blank">
                  <i class="el-icon-link"></i>
                  {{ $t("side-panel.jlunic") }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a onclick="this.href=atob('==gbj5SdkVmL1xmaANncvJncp1mOvRHbpFWb'.split('').reverse().join(''))" href target="_blank">
                  <i class="el-icon-link"></i>
                  {{ $t("side-panel.contact") }}
                </a>
              </td>
            </tr>
          </table>
        </el-card>
      </el-row>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "SidePanel",
  props: {
    modalVisible: Boolean,
    newsList: Array,
    showContent: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    modalBecomeVisible() {
      this.$emit("update:modalVisible", true)
    },
    pushNewsRoute(url) {
      this.$router.push({path: this.$GLOBAL.newsRootPath + "/" + url})
    },
    pushHelpRoute(url) {
      this.$router.push({path: this.$GLOBAL.helpRootPath + "/" + url})
    }
  },
};
</script>

<style scoped src="@/styles/side-panel.css"/>
