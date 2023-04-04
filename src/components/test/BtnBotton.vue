<template>
  <slot :row="{a:1}" :props='[1,2,4]'></slot>
  <!-- <div class="box-c">
      att类名穿透
    </div> -->
  <!-- <div style="width:100px;color:aquamarine">
      子元素内容
    </div> -->
  <div>
    <button class="box-c" @click.stop="onclicks">按钮点击</button>
    <div class="box-c" v-bind="$attrs" >测试继承attr</div>
  </div>
  <slot name="footer" :row="{b:2}" :props='[3,2,4,5]'></slot>
  <br>
  <div>{{searchText}}</div>
  <el-button type="primary" @click="injectEvent(23456)"> injiect event</el-button>
</template>
<script>

</script>

<script setup>
import { inject } from 'vue'
const { searchText, btnChange } = inject('serchVal')
// function defaults () {
//   return 'default 123'
// }
function onclicks () {
  console.log('son')
}
function injectEvent (val) {
  btnChange(val)
}
</script>

<style lang="scss" scoped>
.box-c {
  width: 100px;
  height: 100px;
  // border:1px solid red
}
.attClass {
  background: red;
}
</style>
