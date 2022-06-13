<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="container">
    404
  </div>
</template>

<style lang="less"  scoped>
  @import './index.less';
</style>
