import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Animated, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import * as apiActions from '../../redux/actions/apiActions';
import styles from './styles';
import * as firebase from 'firebase';
import RideMap from '../../Components/RideMap';

const WaitingScreen = (props) => {
	const uid = useSelector((state) => state.user.uid);
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const currentRide = useSelector((state) => state.api.currentRide);
	useEffect(() => {
		var timeLimit = 0;
		const interval = setInterval(() => {
			timeLimit += 1;
			firebase
				.firestore()
				.collection('Running Orders')
				.doc(uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						//console.log(`doc.data()`, doc.data());
						const data = doc.data();
						console.log(`timeLimit`, timeLimit);
						dispatch(apiActions.setCurrentRide(data));

						clearInterval(interval);
						navigation.navigate('Ride Screen');
					} else {
						console.log(`No data`);
					}
				})
				.catch((error) => {
					console.log('Error getting document:', error);
				});
			if (timeLimit === 32) {
				clearInterval(interval);
			}
		}, 5000);
		return () => clearInterval(interval);
	}, []);

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
		<View style={styles.container}>
			<View style={styles.timeContainer}>
				<Text style={styles.textFont}>Waiting for Driver</Text>
				<CountdownCircleTimer
					isPlaying
					duration={180}
					colors={[
						['#004777', 0.4],
						['#F7B801', 0.4],
						['#A30000', 0.2],
					]}
					onComplete={() => {
						console.log('ON_COMPLETE BEFORE RETURN');
						//return [true, 0];
					}}
				>
					{({ remainingTime, animatedColor }) => (
						<Animated.Text
							style={{
								...styles.remainingTime,
								color: animatedColor,
							}}
						>
							{remainingTime}
						</Animated.Text>
					)}
				</CountdownCircleTimer>

				<Pressable
					onPress={() => {
						cancelRide();
					}}
					style={styles.cancelBtn}
				>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 20,
							color: '#000',
						}}
					>
						Cancel Ride
					</Text>
				</Pressable>
			</View>
		</View>
	);
};
export default WaitingScreen;
