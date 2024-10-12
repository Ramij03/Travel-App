import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"; 
import { useCallback } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountryDetail, Failed, HotelDetail, HotelList, HotelSearch, OnBoarding, Payments, PlaceDetail, Recommended, Search, SelectedRoom, SelectRoom, Settings, Success } from './screens';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        regular: require('./assets/fonts/regular.otf'),
        medium: require('./assets/fonts/medium.otf'),
        bold: require('./assets/fonts/bold.otf'),
        light: require('./assets/fonts/light.otf'),
        xtrabold: require('./assets/fonts/xtrabold.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync(); 
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Onboard' component={OnBoarding} options={{headerShown:false}}/>
                <Stack.Screen name='Bottom' component={BottomTabNavigator} options={{headerShown:false}}/>
                <Stack.Screen name='Search' component={Search} options={{headerShown:false}}/>
                <Stack.Screen name='CountryDetail' component={CountryDetail} options={{headerShown:false}}/>
                <Stack.Screen name='Recommended' component={Recommended} options={{headerShown:false}}/>
                <Stack.Screen name='PlaceDetail' component={PlaceDetail} options={{headerShown:false}}/>
                <Stack.Screen name='HotelDetail' component={HotelDetail} options={{headerShown:false}}/>
                <Stack.Screen name='HotelList' component={HotelList} options={{headerShown:false}}/>
                <Stack.Screen name='HotelSearch' component={HotelSearch} options={{headerShown:false}}/>
                <Stack.Screen name='SelectRoom' component={SelectRoom} options={{headerShown:false}}/>
                <Stack.Screen name='Payments' component={Payments} options={{headerShown:false}}/>
                <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
                <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={{headerShown:false}}/>
                <Stack.Screen name='Success' component={Success} options={{headerShown:false}}/>
                <Stack.Screen name='Fail' component={Failed} options={{headerShown:false}}/>
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

