import { UserReturn } from '@/services/user-services';
import { Text, View } from 'react-native';


type IUser = {
    user: UserReturn
}

export default function User(props:IUser) {  
  return (
    <View className="bg-white rounded-xl p-4 mb-3 shadow border border-purple-100">
      <Text className="text-lg font-semibold text-purple-700">
        {props.user.name}
      </Text>
      <Text className="text-sm text-purple-500">
        {props.user.email}
      </Text>
    </View>
  );
}

