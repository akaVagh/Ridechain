import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
// import DestinationSearch from './src/Screens/DestinationSearch';
// import HomeScreen from './src/Screens/HomeScreen';
// import SearchResults from './src/Screens/SearchResults';
import Router from './src/Navigation/Router';
import Drawer from './src/Navigation/DrawerScreen';
import RootStack from './src/Navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/Screens/SplashScreen';
import { AuthContext } from './src/Components/Context';

export default function App() {
    return (
        <>
            <SafeAreaView style={styles.droidSafeArea}>
                <StatusBar style='auto' />
                {/* <Drawer /> */}
                <RootStack />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 24 : 0,
    },
});
