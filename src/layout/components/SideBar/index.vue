<template>

  <el-menu default-active="1-2" class="el-menu-vertical-demo" :collapse="false" active-text-color="#0960bd"
    background-color="#001529" text-color="#fff" unique-opened="true" @open="handleOpen" @close="handleClose">

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
    <!-- <el-menu-item index="3">
      <el-icon><Paperclip /></el-icon>
      <span>功能</span>
    </el-menu-item> -->
    <el-menu-item index="3">
      <el-icon>
        <Document />
      </el-icon>
      <span>页面</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
// import { ref } from 'vue'

// const isCollapse = ref(true)
function handleOpen () {

}

function handleClose () {

}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height:100vh
}
</style>
