<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header>
          <NavBar></NavBar>
        </el-header>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { AppMain, NavBar, SideBar } from './components'

</script>
<style lang="scss" scoped>
.el-header {
  padding: 0;
  height: 50px;
}
</style>
