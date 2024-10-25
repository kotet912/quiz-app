<template>
  <div class="progress-bar">
    <div class="progress-bar__inner" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script setup>
defineProps({
  progress: {
    type: Number,
    required: true
  }
});
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 12px;
  border-radius: 99px;
  background-color: #f7f7f7;
}

.progress-bar__inner {
  height: 100%;
  height: 12px;
  border-radius: 99px;
  background-color: #3300ff;
  transition: width 0.3s;
}
</style>
