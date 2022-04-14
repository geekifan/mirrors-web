<template>
  <div class="modal">
    <el-dialog :title="$t('side-panel.download')" :visible.sync="modal" width="70%" top="20vh">
      <div id="modal-tab" class="hidden-sm-and-down">
        <el-tabs tab-position="left" style="height: 70%">
          <el-tab-pane v-for="(distro, index) in distros" :key="index" :label="distro.distro" style="padding-left: 20px">
            <h2>{{ distro.distro }}</h2>
            <p v-for="(url, index) in distro.urls" :key="index">
              <a :href="url.url">{{ url.name }}</a>
            </p>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div id="modal-select" class="hidden-md-and-up">
        <el-select v-model="selectedDistro" placeholder="请选择" style="width: 100%">
          <el-option v-for="(distro, index) in distros" :key="index" :label="distro.distro" :value="index">
          </el-option>
        </el-select>
        <h2>
          {{ this.distros.length === 0 ? "" : this.distros[this.selectedDistro].distro }}
        </h2>
        <div v-if="this.distros.length > 0">
          <p v-for="(url, index) in distros[selectedDistro].urls" :key="index" >
          <a :href="url.url">{{ url.name }}</a>
        </p>
        </div>
        
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  name: "ModalPage",
  props: {
    modalVisible: Boolean,
    distros: {
      type: Array,
      default() {
        return [
          {
            "distro": "",
            "urls": {
              "name": "",
              "url": "",
            }
          }
        ]
      }
    } 
  },
  data() {
    return {
      selectedDistro: 0,
    };
  },
  computed: {
    modal: {
      get() {
        return this.modalVisible
      },
      set(value) {
        this.$emit("update:modalVisible", value)
        return value
      },
    },
  },
};
</script>
