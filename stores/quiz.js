// Состояние теста
import { defineStore } from 'pinia'
import questionsData from '@/data/questions';


export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
  }),
  actions: {
    // Инициализация вопросов
    initQuestions () {
      this.questions = questionsData.map((item) => {
        const correctAnswerIndex = item.answers.findIndex((answer) =>
          answer.endsWith('(+)')
        );
        return {
          question: item.question,
          answers: item.answers.map((answer) =>
            answer.replace(' (+)', '').trim()
          ),
          correctAnswerIndex,
        };
      });
      // Перемешивание вопросов
      this.questions = this.questions.sort(() => Math.random() - 0.5);

      // Перемешивание ответов для каждого вопроса
      this.questions = this.questions.map((item) => {
        const answers = item.answers.map((answer, index) => ({
          text: answer,
          index,
        }));

        const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

        return {
          ...item,
          answers: shuffledAnswers,
          correctAnswerIndex: shuffledAnswers.findIndex(
            (answer) => answer.index === item.correctAnswerIndex
          ),
        };
      });
    },
  },
});
