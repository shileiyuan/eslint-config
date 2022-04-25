<template>
  <div>
    Hello, {{ text }}
    <!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <Hello text="abc" :age="12" year="2021" name="Jenny" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Hello from './Hello.vue'
// eslint-disable-next-line prefer-const
let text = ref('World')
</script>
<style lang="scss" scoped>
</style>
