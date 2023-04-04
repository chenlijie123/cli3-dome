<template>
  <div @click.stop="onClick">
    <div>
      <el-button type="primary" size="default" @click="handelClick">emit</el-button>
    </div>
    <BtnBotton   class="attClass" style="border: 1px solid blue">
      <template v-slot:footer="{row, props}">
        defaultcontent  {{ row }}  {{ props }}
      </template>

    </BtnBotton>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import BtnBotton from './BtnBotton.vue'

// const slotName = 'slotName'
const emits = defineEmits(['increase'])
const handelClick = () => {
  emits('increase', 23456789)
}
function onClick () {
  console.log('fater')
}
// function onclickbtn () {
//   console.log('slot-son')
//   slotName = 'noslot'
//   console.log(slotName)
// }
</script>

<style lang="scss" scoped>
.attClass {
  // color:  red;
  // border: 1px solid green;
  // background: red;
}
</style>
