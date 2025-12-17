import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import InputField from '@/components/InputField';
import { useAuth } from '@/contexts/AuthContext';
import { userApiDefault } from '@/services/user-services';
import { useNavigation } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const auth = useAuth()
  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const fazerLogin = async () => {
    if (!email) {
      return alert("Preencha o campo de email!")
    }

    if (!password) {
      return alert("Preencha o campo de senha!")
    }

    const user = await userApiDefault.authUser({
      email, password
    })

    if (user) {
      auth.login(user)
    } else {
      alert('Credenciais inválidas')
    }
  }
  
  return (
    <View className="flex-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 24 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-4xl font-extrabold text-white mb-12 text-center">
          Bem-vindo de volta
        </Text>

        <View className="w-full space-y-8">
          <InputField
            placeholder='Email'
            type='email'
            value={email}
            onChange={(newEmail) => setEmail(newEmail)}
          />

          <InputField
            placeholder='Senha'
            type='password'
            value={password}
            onChange={(newPassword) => setPassword(newPassword)}
          />

          <TouchableOpacity className="mt-6 w-full bg-purple-700 py-5 rounded-3xl shadow-lg" onPress={() => fazerLogin()}>
            <Text className="text-center text-white font-bold text-lg">Entrar</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-10 flex-row justify-center">
          <Text className="text-white mr-2 text-base">Não tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text className="text-yellow-300 font-semibold text-base">Criar conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}