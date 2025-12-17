import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { QUESTIONS_PER_QUIZ } from '@/constants/config';
import { addNumberAnswered, addPoint, getNumberAnswered, getQuestion, randomizeQuestion } from '@/hooks/use-questions';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Question() {
  const router = useRouter()
  const { questionId } = useLocalSearchParams<{ questionId: string }>();
  const question: any = getQuestion(parseInt(questionId));
  const [selected, setSelected] = useState<number | null>(null);
  const [numberAnswered, setNumberAnswered] = useState(0);

  useEffect(() => {
    (async () => {
      setNumberAnswered(await getNumberAnswered())
    })();
  }, [])

  const nextScreen = async () => {
    await addNumberAnswered()
    if ((numberAnswered+1) >= QUESTIONS_PER_QUIZ) {
      router.push('/completed');
    } else {
      changeQuestion()
    }
  }

  const changeQuestion = async () => {
    const nextQuestionId = await randomizeQuestion()
    router.push({
      pathname: "/[questionId]",
      params: { questionId: nextQuestionId },
    });
  }

  const handleAnswerPress = async (index: number) => {
    if (selected === null) {
      setSelected(index);
      return;
    }

    if (selected === index) {
      if (question.correct === index) {
        await addPoint()
      }
      nextScreen()
    } else {
      setSelected(index);
    }
  };

  const getOptionStyle = (index: number) => {
    if (index === selected) {
      return styles.selectedOption;
    }
    return styles.option;
  };

  if (!question) {
    return (<></>)
  }

  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'red';
    }
  }

  const getDifficultyName = () => {
    switch (question.difficulty) {
      case 'easy':
        return 'FÁCIL';
      case 'medium':
        return 'MÉDIO';
      case 'hard':
        return 'DIFÍCIL';
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/dino-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.questionText}>
          {numberAnswered+1}. {question.question}
        </ThemedText>

        {question.answers.map((answer: string, index: number) => (
          <TouchableOpacity
            key={index}
            style={getOptionStyle(index)}
            onPress={() => handleAnswerPress(index)}
          >
            <ThemedText type="defaultSemiBold" style={styles.answerText}>
              {answer}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>

      <ThemedText style={{...styles.difficultyText, color: getDifficultyColor()}}>- {getDifficultyName()} -</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  questionText: {
    marginBottom: 12,
  },
  option: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: '#00B894', // verde claro
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  answerText: {
    color: '#000',
  },
  confirmText: {
    marginTop: 16,
    textAlign: 'center',
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    objectFit: 'fill',
    position: 'absolute',
  },
  difficultyText: {
    textAlign: 'center',
    fontSize: 20
  }
});