import { FlatList, View } from 'react-native';

import { Header } from '@/components/Header';
import User from '@/components/User';
import { API_LIMIT } from '@/constants/api-constants';
import { useAuth } from '@/contexts/AuthContext';
import { userApiDefault, UserReturn } from '@/services/user-services';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UsersScreen() {
  const auth = useAuth()
  
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState<UserReturn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await loadMore(0);
      setLoading(false);
    })();
  }, []);

  const loadMore = async (page:number) => {
    const nextPage = page + 1;
    const token = auth.user?.jwt;

    const nextUsers = await userApiDefault.listUser(API_LIMIT, page, token);
    if (nextUsers.length > 0) {
      setUsers((prev) => [...prev, ...nextUsers]);
      setPage(nextPage);
    }
  };

  const renderItem = ({ item }: { item: UserReturn }) => (
    <User user={item}/>
  );

  if (loading) {
    return <View className="flex-1 bg-purple-50" />;
  }

  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <View className="bg-purple-50">
        <Header/>
      </View>

      <View className="flex-1 px-4 pt-4">
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          onEndReached={() => loadMore(page)}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}