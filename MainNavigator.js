import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import AddItinerario from './src/screens/AddItinerario';
import ItineraryScreen from './src/screens/ItineraryScreen';
import MyItinerary from './src/screens/MyItinerary'
import ItineraryDetails from './src/screens/ItineraryDetails';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Formulario" component={AddItinerario} options={{ headerShown: false }} />
            <Stack.Screen name="Resultado" component={ItineraryScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MeusItinerarios" component={MyItinerary} options={{ headerShown: false }} />
            <Stack.Screen name="DetalhesItinerario" component={ItineraryDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MainNavigator;
