import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { QUESTIONS_PER_QUIZ } from '@/constants/config';
import { useSession } from '@/hooks/auth/session-provider';
import { getPoints, randomizeQuestion, resetNumberAnswered, resetPoints } from '@/hooks/use-questions';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function CongratsScreen() {
  const router = useRouter();
  const { signOut, session } = useSession();
  const loginInfo = session ? JSON.parse(session) : {};

  const [score, setScore] = useState(0);

  useEffect(() => {
    (async () => {
      const newScore = await getPoints();

      setScore(newScore);
    })();
  }, [])

  const handleSendEmail = () => {
    console.log("Fingindo enviar para email...")
    alert(`Resultado enviado para ${loginInfo.email}!`);
  };

  const resetQuiz = async () => {
    await resetNumberAnswered();
    await resetPoints();

    const nextQuestionId = await randomizeQuestion()
    router.push({
      pathname: "/[questionId]",
      params: { questionId: nextQuestionId },
    });
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/dino-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Parabéns, {loginInfo.nome}!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Você completou o quiz!</ThemedText>
        <ThemedText type="default">
          Sua pontuação final foi:
        </ThemedText>
        <ThemedText type="title" style={styles.scoreText}>
          {score} / {QUESTIONS_PER_QUIZ} acertos
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>
            Enviar para {loginInfo.email}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainerRow}>
        <TouchableOpacity onPress={resetQuiz}>
          <ThemedText style={{ color: '#4f8fd9ff' }}>Refazer quiz</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut}>
          <ThemedText style={{ color: '#d9534f' }}>Sair da conta</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  stepContainerRow: {
    gap: 8,
    marginBottom: 16,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  scoreText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff8800ff',
  },
  button: {
    backgroundColor: '#ff8800ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    objectFit: 'fill',
    position: 'absolute',
  },
});