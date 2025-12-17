import { useAuth } from "@/contexts/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

type IHeader = {
    hideLogout?: boolean
}

export function Header(props:IHeader) {
    const auth = useAuth()
    const router = useRouter();
    const navigation = useNavigation<any>();

    const canGoBack = navigation.canGoBack();

    const onLogout = () => {
        auth.logout()
    }

    return (
        <View className="w-full h-20 bg-purple-50 flex-row items-center justify-between px-4">
            <TouchableOpacity
                disabled={!canGoBack}
                onPress={() => router.back()}
                className="w-10 h-15 items-center justify-center"
            >
                {canGoBack && (
                    <MaterialIcons name="arrow-back" size={28} color="purple" />
                )}
            </TouchableOpacity>

            {!props.hideLogout &&
                <TouchableOpacity
                    onPress={onLogout}
                    className="w-10 h-15 items-center justify-center"
                >
                    <MaterialIcons name="logout" size={28} color="purple" />
                </TouchableOpacity>
            }
        </View>
    );
}