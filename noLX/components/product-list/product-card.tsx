import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

type ProductCardProps = {
    id: number;
    name: string;
    value: number;
    datetime: string;
    location: string;
};

export default function ProductCard({
    id,
    name,
    value,
    datetime,
    location
}: ProductCardProps) {
    const router = useRouter()


    const goToPage = () => {
        router.push({
            pathname: "/[productId]",
            params: { productId: id },
        });
    };

    return (
        <TouchableOpacity
            onPress={() => goToPage()}
            className="bg-white rounded-lg overflow-hidden shadow-sm m-2 w-60 space-y-2"
        >
            <Image
                source={require('../../assets/images/products/the_only_thing_you_need.png')}
                className="w-full max-h-60"
                style={{ resizeMode: 'stretch' }}
            />

            <Text className="mt-2 px-2 font-semibold text-gray-800">{name}</Text>

            <Text className="px-2 mt-1 pt-8 pb-4 text-2xl text-gray-900 font-bold">
                {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </Text>

            <Text className="px-2 mt-1 pb-5 text-xs text-gray-400">
                {datetime} {location}
            </Text>
        </TouchableOpacity>
    );
}
