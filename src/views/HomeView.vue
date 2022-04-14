<template>
  <div id="home-view">
    <el-row>
      <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="16">
        <el-skeleton animated :loading="!showMirrorList">
          <template slot="template">
            <div style="padding: 14px">
              <el-skeleton-item variant="h1" style="width: 20%" />
            </div>
            <div style="padding: 14px" v-for="index of 12" :key="index">
              <el-skeleton-item variant="h1" style="width: 100%" />
            </div>
          </template>
          <template>
            <MirrorList :tableData="mirrors" />
          </template>
        </el-skeleton>
      </el-col>
      <el-col :xs="0" :sm="9" :md="9" :lg="9" :xl="8" class="hidden-sm-and-down">
        <Side-Panel :modalVisible.sync="modalVisible" :newsList="newsList" :showContent="showNews"/>
      </el-col>
    </el-row>
    <Side-Panel :modalVisible.sync="modalVisible" :newsList="newsList" :showContent="showNews" class="hidden-md-and-up"/>
    <Modal :modalVisible.sync="modalVisible" :distros="distros" />
  </div>
</template>

<script>
import MirrorList from "@/components/MirrorList.vue"
import SidePanel from "@/components/SidePanel.vue"
import Modal from "@/components/Modal.vue"
import { jobs, newsList, distros, info } from "@/api/api.js"

export default {
  name: "HomeView",
  created() {
    document.title = this.$GLOBAL.homeTitle
    info().then( res => {
      this.officials = res.officials
      this.helps = res.helps
      this.updateMirrorList()
    })
    if(this.timer) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(this.updateMirrorList, 10000);
    }
    distros().then( res => {
      this.distros = res
    });
    newsList().then( res => {
      this.newsList = res
      this.showNews = true
    });
    
  },
  destroyed() {
    clearInterval(this.timer);
  },
  components: {
    MirrorList,
    SidePanel,
    Modal,
  },
  methods: {
    updateMirrorList() {
        jobs().then((res) => {
          let tmp = res.sort((a, b) => {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
          })
          tmp.forEach((mirror) => {
            mirror.official = Boolean(this.officials.find((e) => e == mirror.name))
          });
          tmp.forEach((mirror) => {
            mirror.help = Boolean(this.helps.find((e) => e == mirror.name))
          });
          tmp.forEach((mirror) => {
            mirror.showAbs = false
          })
          this.mirrors = tmp;
          this.showMirrorList = true
      });
    }
  },
  data() {
    return {
      modalVisible: false,
      mirrors: [],
      distros: [],
      showMirrorList: false,
      showNews: false,
      newsList: [],
      timer: null,
      officials: [],
      helps: [],
    };
  },
};
</script>
