// Состояние теста
import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
  }),
  actions: {
  },
});
