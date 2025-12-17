import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import InputField from '@/components/InputField';
import { useAuth } from '@/contexts/AuthContext';
import { userApiDefault } from '@/services/user-services';
import { useNavigation } from 'expo-router';
import { useState } from 'react';

export default function SignupScreen() {
  const navigation = useNavigation<any>();
  const auth = useAuth()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  
  const criarUsuario = async () => {
    if (!name) {
      return alert("Preencha o campo de nome!")
    }

    if (!email) {
      return alert("Preencha o campo de email!")
    }

    if (!password) {
      return alert("Preencha o campo de senha!")
    }

    if (password != confirmPassword) {
      return alert("As senhas não são iguais!")
    }

    const user = await userApiDefault.createUser({
      name, email, password
    })

    if (user) {
      auth.login(user)
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 24 }}
      keyboardShouldPersistTaps="handled"
      className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600"
    >
      <Text className="text-4xl font-extrabold text-white mb-12 text-center">
        Criar Conta
      </Text>

      <View className="w-full space-y-8">
        <InputField
          placeholder='Nome'
          value={name}
          onChange={(newName) => setName(newName)}
        />
        
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

        <InputField
          placeholder='Confirmar Senha'
          type='password'
          value={confirmPassword}
          onChange={(newPassword) => setConfirmPassword(newPassword)}
        />

        <TouchableOpacity className="mt-6 w-full bg-purple-700 py-4 rounded-2xl shadow-lg" onPress={() => criarUsuario()}>
          <Text className="text-center text-white font-bold text-lg">
            Criar Conta
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-10 flex-row justify-center">
        <Text className="text-white mr-2 text-base">Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text className="text-yellow-300 font-semibold text-base">Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}