<template>
  <div class="quiz">
    <div class="quiz__title">{{ title }}</div>
    <QuizQuestion
      v-if="currentQuestion"
      :question="currentQuestion"
      @answerSelected="handleAnswer"
    />
    <ProgressBar
      :progress="progress"
      :currentQuestion="quizStore.currentQuestionIndex"
      :totalQuestions="quizStore.questions.length"
    />
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/quiz';
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import QuizQuestion from '@/components/QuizQuestion.vue';
import ProgressBar from '@/components/ProgressBar.vue';

const router = useRouter();
const quizStore = useQuizStore();
const title = 'Тестирование';

onMounted(() => {
  quizStore.initQuestions();
});

const currentQuestion = computed(() => {
  return quizStore.questions[quizStore.currentQuestionIndex];
});

const progress = computed(() => {
  return (quizStore.currentQuestionIndex / quizStore.questions.length) * 100;
});

const handleAnswer = (answerIndex) => {
  quizStore.userAnswers.push(answerIndex);

  setTimeout(() => {
    if (quizStore.currentQuestionIndex + 1 < quizStore.questions.length) {
      quizStore.currentQuestionIndex++;
    } else {
      router.push('/results');
    }
  }, 1000);
};
</script>

<style lang="scss" scoped>
.quiz {
  padding: 75px 270px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__title {
    font-size: 48px;
    font-weight: 800;
    line-height: 59px;
  }
}
</style>
