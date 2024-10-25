<template>
  <div>
    <QuizQuestion
      v-if="currentQuestion"
      :question="currentQuestion"
      @answerSelected="handleAnswer"
    />
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/quiz';
import { onMounted, computed } from 'vue';
import QuizQuestion from '@/components/QuizQuestion.vue';

const quizStore = useQuizStore();

onMounted(() => {
  quizStore.initQuestions();
});

const currentQuestion = computed(
  () => quizStore.questions[quizStore.currentQuestionIndex]
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
