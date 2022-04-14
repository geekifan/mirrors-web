<template>
  <div>
    <div class="title">{{ $t("mirror-list.mirror-list") }}</div>
    <el-row>
      <el-col :span="4">
        <el-button @click="absTime = !absTime">
          <i class="el-icon-refresh" style="padding-right: 5px"></i> 
          {{ absTime ? $t("mirror-list.abs-time") : $t("mirror-list.rel-time") }}
        </el-button>
      </el-col>
      <el-col :span="20">
        <div class="search-box">
          <el-input :placeholder="$t('mirror-list.search')" class="search" v-model="search"></el-input>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tables" style="width: 100%">
      <el-table-column :label="$t('mirror-list.mirror-name')" min-width="190px">
        <template slot-scope="scope">
            <span style="margin-right: 5px"><a :href="$GLOBAL.mirrorRootPath + scope.row.name" class="mirror-name">{{ scope.row.name }}</a></span>
            <span>
              <el-tooltip class="item" effect="dark" :content="$t('mirror-list.icon-official')" placement="top">
                <!-- icon-award -->
                <!-- 
                    Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com 
                    License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) 
                    Copyright 2022 Fonticons, Inc. 
                  -->
                <svg xmlns="http://www.w3.org/2000/svg" class="official" viewBox="0 0 384 512" v-if="scope.row.official">
                  <path d="M288 358.3c13.98-8.088 17.53-30.04 28.88-41.39c11.35-11.35 33.3-14.88 41.39-28.87c7.98-13.79 .1658-34.54 4.373-50.29C366.7 222.5 383.1 208.5 383.1 192c0-16.5-17.27-30.52-21.34-45.73c-4.207-15.75 3.612-36.5-4.365-50.29c-8.086-13.98-30.03-17.52-41.38-28.87c-11.35-11.35-14.89-33.3-28.87-41.39c-13.79-7.979-34.54-.1637-50.29-4.375C222.5 17.27 208.5 0 192 0C175.5 0 161.5 17.27 146.3 21.34C130.5 25.54 109.8 17.73 95.98 25.7C82 33.79 78.46 55.74 67.11 67.08C55.77 78.43 33.81 81.97 25.72 95.95C17.74 109.7 25.56 130.5 21.35 146.2C17.27 161.5 .0008 175.5 .0008 192c0 16.5 17.27 30.52 21.34 45.73c4.207 15.75-3.615 36.5 4.361 50.29C33.8 302 55.74 305.5 67.08 316.9c11.35 11.35 14.89 33.3 28.88 41.4c13.79 7.979 34.53 .1582 50.28 4.369C161.5 366.7 175.5 384 192 384c16.5 0 30.52-17.27 45.74-21.34C253.5 358.5 274.2 366.3 288 358.3zM112 192c0-44.27 35.81-80 80-80s80 35.73 80 80c0 44.17-35.81 80-80 80S112 236.2 112 192zM1.719 433.2c-3.25 8.188-1.781 17.48 3.875 24.25c5.656 6.75 14.53 9.898 23.12 8.148l45.19-9.035l21.43 42.27C99.46 507 107.6 512 116.7 512c.3438 0 .6641-.0117 1.008-.0273c9.5-.375 17.65-6.082 21.24-14.88l33.58-82.08c-53.71-4.639-102-28.12-138.2-63.95L1.719 433.2zM349.6 351.1c-36.15 35.83-84.45 59.31-138.2 63.95l33.58 82.08c3.594 8.797 11.74 14.5 21.24 14.88C266.6 511.1 266.1 512 267.3 512c9.094 0 17.23-4.973 21.35-13.14l21.43-42.28l45.19 9.035c8.594 1.75 17.47-1.398 23.12-8.148c5.656-6.766 7.125-16.06 3.875-24.25L349.6 351.1z"/>
                </svg>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" :content="$t('mirror-list.icon-help')" placement="top">
                <a @click="pushHelpRoute(scope.row.name)">
                  <!-- icon-help -->
                  <!-- 
                    Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com 
                    License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) 
                    Copyright 2022 Fonticons, Inc. 
                  -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="help" viewBox="0 0 512 512" v-if="scope.row.help" :href="'/docs/' + scope.row.name">
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"/>
                  </svg>
                </a>
              </el-tooltip>
            </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('mirror-list.last-sync')" min-width="180px">
        <template slot-scope="scope">
          {{ getLastUpdate(scope.row.last_update_ts) }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('mirror-list.next-sync')" min-width="180px">
        <template slot-scope="scope">
          {{ getNextSchedule(scope.row.next_schedule_ts) }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('mirror-list.sync-status')" min-width="120px">
        <template slot-scope="scope">
          <el-tag :type="statusObject[scope.row.status].tagStyle" disable-transitions>
            <i :class="statusObject[scope.row.status].iconName"></i>
            {{ $t("mirror-list." + scope.row.status) }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from "moment"

export default {
  data() {
    return {
      search: "",
      absTime: true,
      statusObject: {
        success: {
          tagStyle: "success",
          iconName: "el-icon-circle-check",
        },
        paused: {
          tagStyle: "warning",
          iconName: "el-icon-remove-outline",
        },
        syncing: {
          tagStyle: "primary",
          iconName: "el-icon-refresh",
        },
        failed: {
          tagStyle: "danger",
          iconName: "el-icon-circle-close",
        },
        unknown: {
          tagStyle: "info",
          iconName: "el-icon-warning-outline",
        },
      }
    };
  },
  computed: {
    tables: function () {
      var search = this.search;
      if (search) {
        return this.tableData.filter(function (data) {
          return String(data.name).toLowerCase().indexOf(search) > -1
        });
      }
      return this.tableData;
    },
  },
  methods: {
    pushHelpRoute(url) {
      this.$router.push(this.$GLOBAL.helpRootPath + "/" + url)
    },
    getLastUpdate(ts) {
      let time = moment.unix(ts)
      if(this.absTime) {
        return time.format("YYYY-MM-DD HH:mm:SS")
      } else {
        if (time.isBefore("2000-01-01"))
          return this.$t("mirror-list.a-long-time-ago")
        return time.fromNow()
      }
    },
    getNextSchedule(ts) {
      let time = moment.unix(ts)
      if(this.absTime) {
        return time.format("YYYY-MM-DD HH:mm:SS")
      } else {
        if (time.isBefore("2000-01-01") || time.isAfter("2100-01-01"))
          return this.$t("mirror-list.a-long-time-later")
        return time.fromNow()
      }
    }
  },
  props: {
    tableData: Array,
  },
};
</script>

<style scoped src="@/styles/mirror-list.css"/>
