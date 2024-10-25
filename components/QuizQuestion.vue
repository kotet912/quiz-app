<template>
  <div class="quiz-question">
    <h2>{{ question.question }}</h2>
    <ul>
      <li
        v-for="(answer, index) in question.answers"
        :key="index"
        @click="selectAnswer(index)"
      >
        {{ answer.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  question: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['answerSelected']);

const selectAnswer = (index) => {
  emit('answerSelected', index);
};
</script>

<style scoped>
.quiz-question {
  /* Стили для компонента */
}
</style>
