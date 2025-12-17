import React from "react";
import { ScrollView, Text, View } from "react-native";
import ProductCard from "./product-card";

type Product = {
  id: number;
  name: string;
  value: number;
  datetime: string;
  location: string;
};

type HorizontalItemListProps = {
  title: string;
  products: Product[];
};

export default function HorizontalProductList({ title, products }: HorizontalItemListProps) {
  return (
    <View className="my-4">
      <Text className="text-lg font-bold px-4 mb-2 text-gray-800">{title}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 4 }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            value={product.value}
            datetime={product.datetime}
            location={product.location}
          />
        ))}
      </ScrollView>
    </View>
  );
}
