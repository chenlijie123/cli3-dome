<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{ num }}
    </div>
    <button type="button" @click="increments"> num ++</button>
    <Props :arrList="arrList" :title="title" propF="danger"></Props>

    <div>
      {{ searchText }}
    </div>

    <custom-input v-model="searchText"></custom-input>
     <Emits @increase="callback"></Emits>
  </div>
 <!-- <AsyncComp></AsyncComp> -->
  <Suspense>
    <template #default>
       <AsyncComp></AsyncComp>
    </template>
    <template #fallback>
      <div>
       {{ 'loading.........'}}
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { ref, reactive, provide, defineAsyncComponent } from 'vue'

import Props from '@/components/Props.vue'
import Emits from '@/components/test/index.vue'
import CustomInput from '@/components/CustomInput.vue'

// import AsyncInfo from '@/components/AsyncInfo.vue'
// import error from '@/components/error.vue'

const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('@/components/AsyncInfo.vue'))
    }, 3000)
    // reactive(import('@/components/error.vue'))
  })
})

// const AsyncComp = defineAsyncComponent({
//   loader: () => import('@/views/HomeView.vue'),
//   // 加载异步组件时使用的组件
//   loadingComponent: () => import('@/components/load.vue'),
//   // 加载失败时使用的组件
//   errorComponent: () => import('@/components/error.vue'),
//   // 在显示加载组件之前延迟。默认值：200ms。
//   delay: 10,
//   // 超过给定时间，则会显示错误组件。默认值：Infinity。
//   timeout: 100
// })
// const AsyncComp = defineAsyncComponent({
//   loader: () => import('@/components/load.vue'),

//   // 加载异步组件时使用的组件
//   loadingComponent: () => import('@/components/AsyncInfo.vue'),
//   // 展示加载组件前的延迟时间，默认为 200ms
//   delay: 200,

//   // 加载失败后展示的组件
//   errorComponent: () => import('@/components/error.vue'),
//   // 如果提供了一个 timeout 时间限制，并超时了
//   // 也会显示这里配置的报错组件，默认值是：Infinity
//   timeout: 3000
// })

const num = ref(23443)
const title = ref('')
const searchText = ref(null)

function btnChange (val) {
  console.log(val)
  searchText.value = val || '2333333'
}

provide('serchVal', {
  searchText,
  btnChange
})

function increments () {
  num.value++
  title.value = 'props 标题展示' + num.value
  objData.title = 'Props对象 标题展示' + num.value
  arrList.push(num.value)
}

function callback (v) {
  console.log('-------', v)
}

// reactive({
//   objData: {
//     title: '1'
//   },
//   arrList: []
// })
const objData = reactive({
  title: null
})

const arrList = reactive([])
</script>
<style scoped>

</style>
