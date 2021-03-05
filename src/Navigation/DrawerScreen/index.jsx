import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MessageScreen from '../../Screens/MessageScreen';
import SettingScreen from '../../Screens/SettingScreen';
import Router from '../Router';
import DrawerContent from './DrawerContent';
import ProfileScreen from '../../Screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName='Home'
				drawerContent={(pops) => <DrawerContent {...pops} />}
			>
				<Drawer.Screen name='Home' component={Router} />
				<Drawer.Screen name='Profile' component={ProfileScreen} />
				<Drawer.Screen name='Message' component={MessageScreen} />
				<Drawer.Screen name='Setting' component={SettingScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};
export default DrawerNav;

const styles = StyleSheet.create({});
