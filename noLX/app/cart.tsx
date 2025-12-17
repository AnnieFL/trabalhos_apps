import CartItem from "@/components/cart-item";
import BaseHeader from "@/components/header/base-header";
import { getProduct } from "@/hooks/database/products-provider";
import { getCartItems, removeItemCart, resetCartItems } from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    reloadCartItems()
  },[])

  const reloadCartItems = async () => {
      let items = await getCartItems()
      let full_products:any[] = []
      
      items.map(async (i:number) => {
        full_products.push((await getProduct(i)))
      })

      setCartItems(full_products)
  } 

  const handleItemRemoval = async (id:number) => {
    removeItemCart(id)
    reloadCartItems()
  }

  const handleBuy = () => {
    Alert.alert(
      "Compra finalizada!",
      "Obrigado por comprar na noLX!",
      [{ text: "OK" }]
    );
    resetCart()
  };

  const resetCart = () => {
    resetCartItems();
    setCartItems([])    
  }

  const total = cartItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <View className="flex-1 bg-[#F5F5F5] p-4">
      <BaseHeader title="Carrinho" hideCart={true}/>
      
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold text-[#343434]">Meu Carrinho</Text>
        <TouchableOpacity onPress={resetCart}>
          <Text className="text-[#FF6600] font-semibold">Esvaziar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} removeItem={(id:number) => handleItemRemoval(id)} />
        ))}
      </ScrollView>

      <View className="bg-white rounded-2xl p-4 mt-4 shadow-sm">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg text-[#343434] font-semibold">Total</Text>
          <Text className="text-xl font-bold text-[#FF6600]">
            R$ {total.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleBuy}
          className="bg-[#FF6600] py-3 rounded-2xl flex-row justify-center items-center"
        >
          <Icon name="cart" size={22} color="white" />
          <Text className="text-white font-bold text-lg ml-2">Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
