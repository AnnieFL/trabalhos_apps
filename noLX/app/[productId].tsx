import BaseFooter from '@/components/footer/base-footer';
import BaseHeader from '@/components/header/base-header';
import HorizontalProductList from '@/components/product-list/product-list';
import PseudoTable from '@/components/pseudo-table';
import { getProduct, getProductsBySubcategory } from '@/hooks/database/products-provider';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const product: any = getProduct(parseInt(productId));
  const [recommendedProducts, setRecommendedProducts] = useState<any[]>([])

  useEffect(() => {
    if (product.subcategory) {
      setRecommendedProducts(getProductsBySubcategory(product.subcategory, product.id))
    }
  }, [])

  return (
    <View className="flex-1 bg-white pt-10 pb-14">
      <BaseHeader title="Anúncio" hideCart={true}/>
      
      <ScrollView className="bg-white pb-10 mb-20">
        <View className="h-64 mb-5">
          <Image
            source={require('../assets/images/products/the_only_thing_you_need.png')}
            className="w-full h-full"
            style={{ resizeMode: 'contain' }}
          />
        </View>

        <View className="px-4">
          <Text className="text-sm mb-2 text-gray-400">
            {product.datetime}
          </Text>

          <Text className="text-3xl mb-10">{product.name}</Text>

          <Text className="text-sm mb-10 font-semibold text-gray-500">
            Vendedor: {product.seller}
          </Text>

          <Text className="text-3xl mb-8">
            {product.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </Text>
        </View>

        <View className="px-4 mt-5 mb-5">
          <Text className="text-2xl font-semibold">Descrição</Text>
          <Text className="text-lg text-gray-700 mt-2">{product.description}</Text>
        </View>

        <PseudoTable 
          title='Detalhes'
          lines={[
            {name: 'Condição', value: product.details.condition},
            {name: 'Material', value: product.details.material},
            {name: 'Tamanho', value: product.details.size},
            {name: 'Tipo', value: product.details.type},
            {name: 'Doação', value: product.details.donation},
            {name: 'Troca', value: product.details.trading},
          ]}
        />

        <View className="px-4 mt-10 mb-10">
          <Text className="text-2xl font-semibold">Localização</Text>
          <Text className="text-gray-700 mt-2">{product.location}</Text>
        </View>

        {recommendedProducts.length > 0 &&
          <HorizontalProductList title='Recomendados para você:' products={recommendedProducts} />
        }
      </ScrollView>
      <BaseFooter product={product}/>
    </View>
  );
}