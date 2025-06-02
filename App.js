import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; // <- Adicionado

import Home from "./janelas/home";
import PontosTuristicos from "./janelas/pontosTuristicos";
import Igrejas from "./janelas/igrejas";

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
          name="Igrejas"
          component={Igrejas}
          options={{
            tabBarLabel: "Igrejas",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="church" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
