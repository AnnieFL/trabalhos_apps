import { getCartItems } from '@/hooks/use-cart';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function GoCart() {
    const router = useRouter()
    const [numberCartItems, setNumberCartItems] = useState(0)

    useEffect(() => {
        (async () => {
            let items = await getCartItems()
            setNumberCartItems(items.length)
        })()
    },[])

    return (
        <TouchableOpacity onPress={() => router.push({
            pathname: "/cart",
        })}>
            <View className="relative">
                <Icon name="cart-outline" size={24} color="#343434" />

                {/* Notification Badge */}
                {numberCartItems > 0 && (
                    <View className="absolute top-[-10] left-[-5] bg-red-500 rounded-full w-5 h-5 flex justify-center items-center">
                        <Text className="text-white text-xs font-bold">
                            {numberCartItems}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}
