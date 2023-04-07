<template>
  <div class="logo">
    <div>{{ iscollapse ? '后台' : '管理系统' }}</div>
  </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">

      <el-menu default-active="1-2" class="el-menu-vertical-demo" :collapse="iscollapse" active-text-color="#0960bd"
        background-color="#001529" text-color="#fff" :unique-opened="true" @open="handleOpen" @close="handleClose">

        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Menu />
            </el-icon>
            <span>Dashboard</span>
          </template>
          <el-menu-item index="1-1">分析页</el-menu-item>
          <el-menu-item index="1-2">工作台</el-menu-item>
        </el-sub-menu>
        <!-- <el-sub-menu index="2">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu> -->
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Paperclip />
            </el-icon>
            <span>功能</span>
          </template>
          <el-menu-item index="2-1">功能 one</el-menu-item>
          <el-menu-item index="2-2">功能 two</el-menu-item>
          <el-menu-item index="2-3">功能 three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>图标</template>
            <el-menu-item index="2-4-1">图标 one</el-menu-item>
            <el-menu-item index="2-4-2">图标 two</el-menu-item>
            <el-menu-item index="2-4-3">图标 three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
       <el-menu-item index="3">
          <el-icon><Paperclip /></el-icon>
          <span>功能</span>
        </el-menu-item>
          <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面页面页面页面页面页面页面页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>  <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>页面</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
</template>

<script setup>
// import { ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

// const isCollapse = ref(true)
const store = useStore()
const iscollapse = computed(() => store.getters.iscollapse)

function handleOpen () {

}

function handleClose () {

}
</script>

<style lang="scss">
.el-scrollbar {
  height: calc(100vh - 50px);
}
.scrollbar-wrapper {
  overflow-x: hidden !important;

  height: 100%;
  // background-color: aqua;

  .el-scrollbar__view {
    height: 100%;
  }

  .el-menu {
    min-height: 100%;
    // height: auto;
    border-right: 0;
  }
}

.el-scrollbar__bar {
  &.is-vertical {
    right: 0px;
  }

  &.is-horizontal {
    display: none;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}

.logo {
  // height: 50px;
  line-height: 50px;
  font-size: 24px;
  color: #435EBE;
  background-color:#001529;
  font-weight: 600;
  text-align: center;
}
</style>
