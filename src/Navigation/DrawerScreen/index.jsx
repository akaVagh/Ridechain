import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Router from '../Router';

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Router} />
        </Drawer.Navigator>
    );
};
export default DrawerNav;

const styles = StyleSheet.create({});
