import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MessageScreen from '../../Screens/MessageScreen';
import SettingScreen from '../../Screens/SettingScreen';
import Router from '../Router';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={(pops) => <DrawerContent {...pops} />}
        >
            <Drawer.Screen name='Home' component={Router} />
            <Drawer.Screen name='Message' component={MessageScreen} />
            <Drawer.Screen name='Setting' component={SettingScreen} />
        </Drawer.Navigator>
    );
};
export default DrawerNav;

const styles = StyleSheet.create({});
