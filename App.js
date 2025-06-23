import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Home from "./janelas/home";
import PontosTuristicos from "./janelas/pontosTuristicos";
import Igrejas from "./janelas/igrejas";
import SplashScreen from './janelas/splash'

import LoginScreen from './janelas/LoginScreen';
import { AuthProvider, useAuth } from './context/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MainAppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarStyle: { position: "absolute", height: 60, paddingBottom: 5, borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="PontosTuristicos"
        component={PontosTuristicos}
        options={{
          tabBarLabel: "Pontos Turísticos",
          tabBarIcon: ({ color }) => (
            <Icon name="location-outline" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Igrejas"
        component={Igrejas}
        options={{
          tabBarLabel: "Igrejas",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="church" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        <Stack.Screen name="MainApp" component={MainAppTabs} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}