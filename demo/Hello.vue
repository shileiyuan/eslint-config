<template>
  <div>
    Hello, {{ text }}
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  text: string,
  name: string,
  age: number,
  year: string
}>()
</script>
<style lang="scss" scoped>
</style>
