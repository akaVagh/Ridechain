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
    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = React.useReducer(
        loginReducer,
        initialLoginState
    );

    const authContext = React.useMemo(
        () => ({
            signIn: async (foundUser) => {
                // setUserToken('fgkj');
                // setIsLoading(false);
                const userToken = String(foundUser[0].userToken);
                const userName = foundUser[0].username;

                try {
                    await AsyncStorage.setItem('userToken', userToken);
                } catch (e) {
                    console.log(e);
                }
                // console.log('user token: ', userToken);
                dispatch({ type: 'LOGIN', id: userName, token: userToken });
            },
            signOut: async () => {
                // setUserToken(null);
                // setIsLoading(false);
                try {
                    await AsyncStorage.removeItem('userToken');
                } catch (e) {
                    console.log(e);
                }
                dispatch({ type: 'LOGOUT' });
            },
            signUp: () => {
                // setUserToken('fgkj');
                // setIsLoading(false);
            },
            toggleTheme: () => {
                setIsDarkTheme((isDarkTheme) => !isDarkTheme);
            },
        }),
        []
    );

    useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false);
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e);
            }
            // console.log('user token: ', userToken);
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator size='large' />
            </View>
        );
    }

    return (
        // <SafeAreaView style={styles.droidSafeArea}>
        //     <View>
        //         <StatusBar style='auto' />
        //         <HomeScreen />
        //         <DestinationSearch />
        //         <SearchResults />
        //     </View>
        // </SafeAreaView>
        <>
            <SafeAreaView style={styles.droidSafeArea}>
                <StatusBar style='auto' />
                <Drawer />
                {/* <RootStack /> */}
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
