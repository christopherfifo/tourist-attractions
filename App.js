import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./janelas/home";
import PontosTuristicos from "./janelas/pontosTuristicos"; // Crie esse componente!
import Livro from "./janelas/livro"; // Crie esse componente!

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#007AFF",
          tabBarStyle: { position: "absolute", height: 60, paddingBottom: 5 },
        }}
      >
        <Tab.Screen
          name="PontosTuristicos"
          component={PontosTuristicos}
          options={{
            tabBarLabel: "Pontos Turísticos",
            tabBarIcon: ({ color, size }) => (
              <Icon name="location-outline" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Livro"
          component={Livro}
          options={{
            tabBarLabel: "Livro",
            tabBarIcon: ({ color, size }) => (
              <Icon name="book-outline" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}