import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GoCart from '../ui/go-cart';

type BaseHeaderProps = {
    setActiveCategory: (categoryId: number) => void
    activeCategory: number,
    all_categories: any[]
}

export default function InitialHeader({
    setActiveCategory,
    activeCategory,
    all_categories
}: BaseHeaderProps) {
    return (
        <View className="flex-col justify-between pt-14 min-h-[180px] w-full">
            <View className="flex-row justify-between">
                <Text className="text-xs pl-5 text-[#343434]">
                    <Icon name="map-marker" size={12} color="#343434" /> Buscando em todo o Brasil <Icon name="chevron-down" size={12} color="#343434" />
                </Text>

                <GoCart/>
            </View>
            <View className="flex-row justify-between bg-white p-2">
                {all_categories.map((category) => {
                    return (
                        <TouchableOpacity
                            key={category.id}
                            onPress={() => setActiveCategory(category.id)}
                            className={`flex-1 items-center py-1 ${activeCategory == category.id ? "border-b-2 border-gray-500" : "border border-transparent"
                                }`}>
                            <Icon size={22} color={"#343434"} name={category.icon} />
                            <Text className={`text-xs mt-1 ${"text-gray-500"}`}>
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}