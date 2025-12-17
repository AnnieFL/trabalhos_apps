import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppLayout() {
  const insets = useSafeAreaInsets();
    
  return (
      <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7c3aed",
        tabBarInactiveTintColor: "#a78bfa",
        tabBarStyle: {
          backgroundColor: "#faf5ff",
          borderTopWidth: 0,
          height: 56 + insets.bottom, 
          paddingBottom: insets.bottom,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="usuarios"
        options={{
          title: "Usuários",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}