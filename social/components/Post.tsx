import { PostReturn } from '@/services/post-services';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';


type IPost = {
    post: PostReturn,
    userId: number|undefined,
    deletePost: (postId:number) => void
}

export default function Post(props:IPost) {  
  const handleDelete = () => {
    Alert.alert(
      "Excluir Post",
      "Tem certeza que deseja excluir este post?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            props.deletePost(props.post.id)
          },
        },
      ]
    );
  };
  
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-md relative mt-5">
      {props.post.userId == props.userId &&
        <TouchableOpacity className="absolute top-3 right-3 z-10" onPress={() => handleDelete()}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      }

      <Text className="text-gray-500 text-sm mb-1">Por {props.post.user.name}</Text>
      <Text className="text-lg font-bold text-gray-800 mb-2">{props.post.title}</Text>

      {props.post.file ? (
        <Image
          source={{ uri: props.post.file }}
          className="w-full h-48 rounded-2xl mb-4"
          resizeMode="cover"
        />
      ) : null}

      <Text className="text-gray-700">{props.post.content}</Text>
    </View>
  );
}

