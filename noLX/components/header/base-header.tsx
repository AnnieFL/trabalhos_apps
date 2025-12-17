import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GoCart from '../ui/go-cart';

type BaseHeaderProps = {
    title: string,
    hideCart?: boolean
} 

export default function BaseHeader({
    title,
    hideCart
}:BaseHeaderProps) {
    const router = useRouter()

    return (
        <View className="flex-row justify-between p-4 bg-white shadow-sm">
            <TouchableOpacity onPress={() => router.back()}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            <Text className="text-2xl">{title}</Text>

            {!hideCart &&
                <GoCart />
            }
            {hideCart &&
                <View></View>
            }
        </View>
    );
}