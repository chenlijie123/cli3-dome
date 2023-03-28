<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{ num }}
    </div>
    <button type="button" @click="increments"> num ++</button>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
const num = ref(0)
function increments () {
  num.value++
}
</script>
<style scoped>

</style>
