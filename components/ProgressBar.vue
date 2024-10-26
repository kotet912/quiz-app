<template>
  <div class="progress-bar">
    <div class="progress-bar__head">
      <span> 0 </span>
      <span> {{ totalQuestions }}</span>
    </div>
    <div class="progress-bar__line">
      <div class="progress-bar__inner" :style="{ width: progress + '%' }">
        <span class="progress-bar__text">{{
          currentQuestion !== 0 ? currentQuestion : ''
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  progress: {
    type: Number,
    required: true
  },
  currentQuestion: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.progress-bar {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }

  &__line {
    width: 100%;
    height: 12px;
    border-radius: 99px;
    background-color: #f7f7f7;
  }

  &__inner {
    height: 100%;
    height: 12px;
    border-radius: 99px;
    background-color: #3300ff;
    transition: width 0.3s;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  &__text {
    position: absolute;
    top: 13px;
    text-align: right;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
}
</style>
