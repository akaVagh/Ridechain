import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DestinationSearch from '../Screens/DestinationSearch';
import SearchResults from '../Screens/SearchResults';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Home Screen'}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'Search Screen'}
                    component={DestinationSearch}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'Search Results'}
                    component={SearchResults}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;

const styles = StyleSheet.create({});
