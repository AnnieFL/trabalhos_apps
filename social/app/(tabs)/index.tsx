import { Header } from '@/components/Header';
import Post from '@/components/Post';
import { API_LIMIT } from '@/constants/api-constants';
import { useAuth } from '@/contexts/AuthContext';
import { postApiDefault, PostReturn } from '@/services/post-services';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const navigation = useNavigation<any>()
  const auth = useAuth()
  
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostReturn[]>([]);
  const [userId, setUserId] = useState<number>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      setUserId(auth.user?.id)
      await loadMore(page)
      setLoading(false)
    })()
  }, [])

  const loadMore = async (page:number) => {
    const nextPage = page + 1;
    const token = auth.user?.jwt;

    const nextPosts = await postApiDefault.listPost(API_LIMIT, page, token);
    if (nextPosts.length > 0) {
      setPosts((prev) => [...prev, ...nextPosts]);
      setPage(nextPage);
    }
  };

  const deletePost = async (postId:number) => {
    const token = auth.user?.jwt;
    await postApiDefault.deletePost(postId, token)

    setPosts([])
    setPage(0)
    setLoading(true)
    
    await loadMore(0)

    setLoading(false)
  }

const renderItem = ({ item }: { item: PostReturn }) => (
  <Post 
    post={item}
    userId={userId}
    deletePost={deletePost}
  />
);

  if (loading) {
    return (<></>)
  }

  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <View className="bg-purple-50">
        <Header/>
      </View>

      <View className="flex-1 px-4 pt-4">
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          onEndReached={() => loadMore(page)}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("criar-post")}
        className="absolute bottom-6 right-6 w-16 h-16 bg-purple-600 rounded-full items-center justify-center shadow-xl"
      >
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}