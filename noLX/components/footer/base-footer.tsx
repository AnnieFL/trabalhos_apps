import { addItemCart } from '@/hooks/use-cart';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type BaseFooterProps = {
    product: any
}

export default function BaseFooter({
    product
}: BaseFooterProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleGoToCart = () => {
        setModalVisible(false);
        router.push({
            pathname: '/cart'
        });
    };

    return (
        <View className="absolute pb-14 bottom-0 left-0 p-4 bg-white shadow-md flex-row justify-between items-center">
            <TouchableOpacity
                onPress={() => {addItemCart(product.id); handleOpenModal()}}
                className="bg-orange-500 w-['50%'] m4-1 p-3 rounded-2xl flex justify-center items-center"
            >
                <Text className="text-2xl text-center text-white font-semibold">
                    <Icon name="currency-usd" size={24} color="white" />
                    Solicitar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { }}
                disabled={true}
                className="bg-white-300 w-['50%'] ml-1 p-3 rounded-2xl flex justify-center items-center border border-gray-300"
            >
                <Text className="text-2xl text-center text-gray-300 font-semibold">
                    <Icon name='chat-outline' size={24} color="gray-300" />
                    Chat
                </Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}
            >
                <View className="flex-1 justify-center items-center bg-opacity-100">
                    <View className="bg-white p-6 rounded-2xl w-4/5">
                        <Text className="text-xl font-semibold text-center mb-4">
                            Item Adicionado. Deseja ver o carrinho?
                        </Text>

                        <View className="flex-row justify-around">
                            <TouchableOpacity
                                onPress={handleGoToCart}
                                className="bg-green-500 p-3 rounded-lg flex-1 m-2 justify-center items-center"
                            >
                                <Text className="text-white font-semibold">Ver carrinho</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={handleCloseModal}
                                className="bg-blue-500 p-3 rounded-lg flex-1 m-2 justify-center items-center"
                            >
                                <Text className="text-white font-semibold">Continuar comprando</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    );
}