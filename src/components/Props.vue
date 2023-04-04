<template>
  <div>
    {{ title }}
  </div>
  <div>
    {{ propF }}
  </div>
  <!-- <div>
    {{ objData.title }}
  </div>
<div>
  {{ propE.message }}
</div>
  <div>
    {{ arrList }}
  </div> -->
</template>

<script setup>
// import { defineProps } from 'vue'

defineProps({
  title: {
    required: true,
    type: String,
    default: '222333'
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default (rawProps) {
      return { message: 'hello' }
    }
  },
  propF: {
    validator (value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  objData: {
    type: Object,
    // default: () => ({})
    default (raw) {
      return {
        title: '233333'
      }
    }
  },
  arrList: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>

</style>
