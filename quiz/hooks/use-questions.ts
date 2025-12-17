import { NUMBER_QUESTIONS_ANSWERED, POINTS_KEY, QUESTIONS_USED_KEY } from '@/constants/local-storage-keys';
import { QUESTIONS } from '@/constants/questions';
import { getStorageItemAsync, setStorageItemAsync } from './use-storage-state';

function getQuestionsLength() {
  return QUESTIONS.length;
}

async function resetQuestionUsed() {
  return await setStorageItemAsync(QUESTIONS_USED_KEY, "[]")
}

export async function getAllQuestionsUsed() {
  const storedQuestions = await getStorageItemAsync(QUESTIONS_USED_KEY);

  return storedQuestions ? JSON.parse(storedQuestions) : [];
}

export async function randomizeQuestion() {
  const usedQuestions = await getAllQuestionsUsed();

  let randomQuestionId = Math.floor(Math.random()*getQuestionsLength());

  while (usedQuestions.find((i:number) => (i == randomQuestionId))) {
    randomQuestionId = Math.floor(Math.random()*getQuestionsLength());
  }

  await setQuestionUsed(randomQuestionId);
  return randomQuestionId;
}

export function getQuestion(questionNumber: number) {
  if (questionNumber >= getQuestionsLength()) {
    return {};
  }

  return QUESTIONS[questionNumber];
}

export async function setQuestionUsed(questionNumber: number) {
  if (questionNumber >= getQuestionsLength()) {
    return {};
  }

  const questionsUsed: [number] = await getAllQuestionsUsed();

  if ((questionsUsed.length + 1) >= getQuestionsLength()) {
    return resetQuestionUsed()
  }

  questionsUsed.push(questionNumber)
  return await setStorageItemAsync(QUESTIONS_USED_KEY, `[${questionsUsed.toString()}]`)
}

export async function resetNumberAnswered() {
  setStorageItemAsync(NUMBER_QUESTIONS_ANSWERED, null);
}

export async function addNumberAnswered() {
  const numberAnswered = await getNumberAnswered();
  
  setStorageItemAsync(NUMBER_QUESTIONS_ANSWERED, (numberAnswered+1).toString());
}

export async function getNumberAnswered() {
  const numberAnswered = await getStorageItemAsync(NUMBER_QUESTIONS_ANSWERED);

  return numberAnswered ? parseInt(numberAnswered) : 0;
}

export async function resetPoints() {
  return await setStorageItemAsync(POINTS_KEY, null)
}

export async function addPoint() {
  let currentPoints = await getPoints();

  return await setStorageItemAsync(POINTS_KEY, (currentPoints + 1).toString())
}

export async function getPoints() {
  const storedPoints = await getStorageItemAsync(POINTS_KEY);

  return storedPoints ? parseInt(storedPoints) : 0;
}