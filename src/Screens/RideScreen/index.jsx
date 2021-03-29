import * as firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import RouteMap from '../../Components/RouteMap';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
const RideScreen = (props) => {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(true);
	const uid = useSelector((state) => state.user.uid);
	const cancelRide = () => {
		try {
			firebase
				.firestore()
				.collection('orders')
				.doc(uid)
				.delete()
				.then(() => {
					navigation.navigate('Home Screen');
				});
		} catch (error) {
			console.log('error at cancelRide', error);
		}
	};
	return (
		<View>
			<StatusBar barStyle='light-content' backgroundColor='#000' />
			<RouteMap />

			{loading && (
				<View style={{ bottom: 120 }}>
					<Pressable
						onPress={() => cancelRide()}
						style={styles.cancelBtn}
					>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 20,
								color: '#eee',
							}}
						>
							Cancel Ride
						</Text>
					</Pressable>
				</View>
			)}
		</View>
	);
};
export default RideScreen;
