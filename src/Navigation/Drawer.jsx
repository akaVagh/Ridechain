import React from 'react';
import HomeScreen from '../Screens/HomeScreen';

export const MessageScreen = ({ navigation }) => (
    <HomeScreen navigation={navigation} name='Message' />
);
export const TripScreen = ({ navigation }) => (
    <HomeScreen navigation={navigation} name='Trip' />
);
export const WalletScreen = ({ navigation }) => (
    <HomeScreen navigation={navigation} name='Wallet' />
);
export const SettingScreen = ({ navigation }) => (
    <HomeScreen navigation={navigation} name='Setting' />
);
