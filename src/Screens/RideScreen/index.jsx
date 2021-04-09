import * as firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import RideMap from '../../Components/RideMap';

const RideScreen = (props) => {
	return (
		<View>
			<StatusBar barStyle='light-content' backgroundColor='#000' />
			<RideMap />
		</View>
	);
};
export default RideScreen;
