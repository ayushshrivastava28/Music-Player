import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import MusicScreen from './MusicScreen'
import HomeScreen from './HomeScreen';
import MusicDetails from './MusicDetails';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="MusicScreen" component={MusicScreen} />
                <Stack.Screen name="MusicDetails" component={MusicDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default HomeStack