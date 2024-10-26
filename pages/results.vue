<template>
  <div class="results">
    <h2 class="results__title">{{ resultTitle }}</h2>
    <p class="results__score">{{ resultMessage }}</p>
    <ul class="results__list">
      <li
        v-for="(question, index) in quizStore.questions"
        :key="index"
        :class="['results__item', getAnswerClass(index)]"
      >
        <p class="results__question">{{ question.question }}</p>
        <p class="results__user-answer">
          {{
            question.answers[quizStore.userAnswers[index]]?.text ||
            'Ответ не выбран'
          }}
        </p>
      </li>
    </ul>
    <button
      v-if="correctAnswersCount !== quizStore.questions.length"
      class="results__btn"
      @click="restartQuiz"
    >
      Пройти еще раз
    </button>
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/quiz';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const quizStore = useQuizStore();
const router = useRouter();

const correctAnswersCount = computed(() => {
  return quizStore.userAnswers.filter(
    (answer, index) => answer === quizStore.questions[index].correctAnswerIndex
  ).length;
});

const resultTitle = computed(() => {
  if (correctAnswersCount.value === quizStore.questions.length) {
    return 'Поздравляем!';
  } else if (correctAnswersCount.value > 0) {
    return 'Хороший результат!';
  } else {
    return 'Упс :(';
  }
});

const resultMessage = computed(() => {
  if (correctAnswersCount.value === quizStore.questions.length) {
    return 'Вы правильно ответили на все вопросы. Вы действительно отлично разбираетесь в IT.';
  } else if (correctAnswersCount.value > 0) {
    return `Вы ответили правильно на ${correctAnswersCount.value} вопросов. Так держать!`;
  } else {
    return 'Вы неправильно ответили на все вопросы. Нужно подучить теорию.';
  }
});

const getAnswerClass = (index) => {
  return quizStore.userAnswers[index] ===
    quizStore.questions[index].correctAnswerIndex
    ? 'results__item_correct'
    : 'results__item_incorrect';
};

const restartQuiz = () => {
  quizStore.$reset();
  router.push('/');
};
</script>
<style lang="scss" scoped>
.results {
  padding: 75px 270px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__title {
    font-size: 48px;
    font-weight: 800;
    line-height: 59px;
  }
  &__score {
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
  }
  &__list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    padding: 40px;
    border-radius: 20px;
    &_correct {
      background: rgb(229, 245, 225);
    }
    &_incorrect {
      background: rgb(255, 224, 224);
    }
  }

  &__question {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 15px;
  }
  &__user-answer {
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }

  &__btn {
    border-radius: 10px;
    background: rgb(51, 0, 255);
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    outline: none;
    border: none;
    width: 220px;
    height: 54px;
    margin: auto;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>
