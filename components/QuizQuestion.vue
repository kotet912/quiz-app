<template>
  <div class="quiz-question">
    <h2 class="quiz-question__title">{{ question.question }}</h2>
    <ul>
      <li
        v-for="(answer, index) in question.answers"
        :key="index"
        @click="selectAnswer(index)"
        class="quiz-question__answers"
      >
        <div class="quiz-question__circle"></div>
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

<style lang="scss" scoped>
li {
  margin-bottom: 20px;
  cursor: pointer;
}
.quiz-question {
  border-radius: 20px;
  background: rgb(247, 247, 247);
  padding: 19px 40px;
  height: 490px;

  &__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    margin-bottom: 20px;
  }
  &__circle {
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    max-height: 20px;
    box-sizing: border-box;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 999px;
  }
  &__answers {
    display: flex;
    gap: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
}
</style>
