
import { randomizeQuestion } from '@/hooks/use-questions';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function HomeScreen() {
  const router = useRouter()
  
  useEffect(() => {
    (async () => {
      const nextQuestionId = await randomizeQuestion()
      router.push({
        pathname: "/[questionId]",
        params: { questionId: nextQuestionId },
      });
    })();
  },[])
  
}