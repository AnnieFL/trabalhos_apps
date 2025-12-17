import { Header } from "@/components/Header";
import InputField from "@/components/InputField";
import { useAuth } from "@/contexts/AuthContext";
import { postApiDefault } from "@/services/post-services";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreatePost() {
  const auth = useAuth();
  const navigation = useNavigation<any>()
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [submitted, setSubmitted]  = useState<boolean>(false)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  const handleSubmit = async () => {
    if (!title) {
      alert("Preencha o campo de título!")
      return
    }

    if (!content) {
      alert("Preencha o campo de conteúdo!")
      return
    }

    if (submitted) return
    setSubmitted(true)

    const userId = auth.user?.id
    const token = auth.user?.jwt

    if (!userId || !token) {
      setSubmitted(false)
      return
    }

    const formData = new FormData()

    formData.append('title', title)
    formData.append('content', content)
    formData.append('userId', String(userId))

    if (image) {
      formData.append('image', {
        uri: image,
        name: 'post-image.jpg',
        type: 'image/jpeg',
      } as any)
    }

    await postApiDefault.createPost(formData, token)

    navigation.goBack()
  }

  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <View className="bg-purple-50">
        <Header hideLogout={true}/>
      </View>
  
      <ScrollView
        className="flex-1 bg-purple-50 px-5"
        contentContainerClassName="pt-16 pb-8"
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-3xl font-bold mb-8 text-purple-800">
          Criar Post
        </Text>

        <Text className="text-purple-700 mb-1 font-medium">
          Título
        </Text>
        <InputField
          placeholder='Título'
          value={title}
          onChange={setTitle}
        />

        <Text className="text-purple-700 mb-1 font-medium">
          Conteúdo
        </Text>
        <InputField
          placeholder='Conteúdo'
          value={content}
          type='area'
          onChange={setContent}
        />

        <Text className="text-purple-700 mb-2 font-medium">
          Imagem
        </Text>
        <TouchableOpacity
          className="border-2 border-dashed border-purple-400 rounded-xl p-5 items-center justify-center mb-5 bg-purple-100"
          onPress={pickImage}
        >
          <Text className="text-purple-600 font-medium">
            {image ? "Trocar imagem" : "Selecionar imagem"}
          </Text>
        </TouchableOpacity>

        {image && (
          <Image
            source={{ uri: image }}
            className="w-full h-52 rounded-xl mb-6"
            resizeMode="cover"
          />
        )}

        <TouchableOpacity
          className="bg-purple-600 rounded-xl py-4 items-center shadow-md shadow-purple-400"
          onPress={handleSubmit}
        >
          <Text className="text-white font-bold text-lg">
            Publicar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}