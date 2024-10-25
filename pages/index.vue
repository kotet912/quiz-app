<template>
  <div>
    <QuizQuestion
      v-if="currentQuestion"
      :question="currentQuestion"
      @answerSelected="handleAnswer"
    />
    <ProgressBar :progress="progress" />
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/quiz';
import { onMounted, computed } from 'vue';
import QuizQuestion from '@/components/QuizQuestion.vue';
import ProgressBar from '@/components/ProgressBar.vue';

const quizStore = useQuizStore();

onMounted(() => {
  quizStore.initQuestions();
});

const currentQuestion = computed(
  () => quizStore.questions[quizStore.currentQuestionIndex]
);

const progress = computed(
  () =>
    ((quizStore.currentQuestionIndex + 1) / quizStore.questions.length) * 100
);

const handleAnswer = (answerIndex) => {
  quizStore.userAnswers.push(answerIndex);

  setTimeout(() => {
    if (quizStore.currentQuestionIndex + 1 < quizStore.questions.length) {
      quizStore.currentQuestionIndex++;
    } else {
      navigateTo('/results');
    }
  }, 1000);
};
</script>
