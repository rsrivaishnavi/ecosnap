import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import LandingScreen from "./screens/LandingScreen";
import HeatMap from "./screens/HeatMap";
import ScanPlasticScreen from "./screens/ScanPlasticScreen";

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Landing: undefined;
    Heat : undefined;
    Scan : undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing"> 
                <Stack.Screen name="Landing" component={LandingScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Heat" component={HeatMap}/>
                <Stack.Screen name="Scan" component={ScanPlasticScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
