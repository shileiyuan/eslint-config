<template>
  <div>
    Hello, {{ text }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// eslint-disable-next-line prefer-const
let text = ref('World')
</script>
<style lang="scss" scoped>
</style>
