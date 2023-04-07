<template>
  <div class="navbar">
    <div class="hamburger" @click="collapseChange">
      <el-icon><Grid /></el-icon>
    </div>
    <div class="breadcrumd">
      首页
    </div>
    <div class="right-menu">
      菜单头像
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const iscollapse = computed(() => store.getters.iscollapse)

console.log('iscollapse', iscollapse)
function collapseChange () {
  store.dispatch('crm/navbarBtn')
}

</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  overflow: hidden;
  background: #97a8be;
  .hamburger {
    float: left;
    padding: 0 15px;
    font-size: 24px;
    line-height: 60px;
    height: 100%;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover{
      background: rgba(0, 0, 0, 0.25);
    }
  }
  .breadcrumd {
    color: #97a8be;
    float: left;
  }
  .right-menu {
    float: right;
  }
}
</style>
