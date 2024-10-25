<template>
  <div class="quiz-question">
    <h2 class="quiz-question__title">{{ question.question }}</h2>
    <ul>
      <li
        v-for="(answer, index) in question.answers"
        :key="index"
        @click="selectAnswer(index)"
        class="quiz-question__question"
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

<style lang="scss" scoped>
.quiz-question {
  &__title {
    color: rgb(0, 0, 0);
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0%;
    text-align: left;
  }

  &__question {
    color: rgb(0, 0, 0);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }
}
</style>
