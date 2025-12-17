import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SearchInputProps = {
    setSearch: (search: string) => void
    search: string
    activeCategory: number
    all_categories: any[]
}

export default function SearchInput({
    setSearch,
    search,
    activeCategory,
    all_categories
}: SearchInputProps) {
    return (
        <View className="flex-row items-center bg-gray-100 rounded-full px-3 py-2 mx-2 my-2">
            <Icon name="magnify" size={18} color="#6B7280" />

            <TextInput
                className="flex-1 text-gray-800 ml-2"
                placeholder={`Buscar em ${all_categories.find((c) => c.id == activeCategory)?.name}`}
                placeholderTextColor="#9CA3AF"
                value={search}
                onChangeText={setSearch}
            />
        </View>
    );
}