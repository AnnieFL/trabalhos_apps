import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  id: number;
  name: string;
  value: number;
  seller: string;
  location: string;
  removeItem: (id:number) => void
};

export default function CartItem({ id, name, value, seller, location, removeItem }: Props) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-3 flex-row justify-between items-center shadow-sm">
      <View className="flex-1">
        <Text className="text-lg font-semibold text-[#343434]">{name}</Text>
        <Text className="text-sm text-gray-500">{seller} - {location}</Text>
        <Text className="text-lg font-bold text-[#FF6600] mt-1">R$ {value.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        onPress={(id) => removeItem(id)}
        className="p-2 bg-gray-100 rounded-full"
      >
        <Icon name="trash-outline" size={22} color="#FF6600" />
      </TouchableOpacity>
    </View>
  );
}
