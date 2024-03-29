import React, { useState, useEffect, useRef } from 'react';
import { Image, View, Pressable, Dimensions, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as apiActions from '../../redux/actions/apiActions';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import GOOGLE_MAPS_APIKEY from '../GoogleApi';

const RideMap = (props) => {
	const navigation = useNavigation();

	const [region, setRegion] = useState({
		latitudeDelta: 0.0222,
		longitudeDelta: 0.0121,
		latitude: 21.209934,
		longitude: 72.873976,
	});
	const [myPosition, setMyPosition] = useState(null);
	const mapRef = useRef(null);
	const currentRide = useSelector((state) => state.api.currentRide);

	useEffect(() => {
		userCurrentLocation();
	}, []);

	const userCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			mapRef.current.animateToRegion({
				...region,
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});

			setRegion({
				...region,
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
			setMyPosition({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
		});
	};

	const onUserLocationChange = (event) => {
		setMyPosition(event.nativeEvent.coordinate);
	};

	// const onDirectionFound = (event) => {
	// 	dispatch(orderActions.setRidePath(event));
	// };
	const getDestination = () => {
		if (currentRide) {
			return {
				latitude: currentRide.destination.latitude,
				longitude: currentRide.destination.longitude,
			};
		}
		return {
			latitude: currentRide.origin.latitude,
			longitude: currentRide.origin.longitude,
		};
	};

	return (
		<View style={styles.container}>
			<MapView
				style={{
					width: '100%',
					height: Dimensions.get('window').height - 20,
				}}
				provider={PROVIDER_GOOGLE}
				customMapStyle={require('../../assets/mapStyle.json')}
				initialRegion={region}
				showsUserLocation={true}
				showsMyLocationButton={false}
				ref={mapRef}
				onUserLocationChange={onUserLocationChange}
			>
				<MapViewDirections
					origin={myPosition}
					//onReady={onDirectionFound}
					destination={getDestination()}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={5}
					strokeColor='black'
				/>

				<Marker coordinate={getDestination()} title={'Drop off'} />
			</MapView>

			<View style={styles.drawerBtn}>
				<Pressable onPress={() => navigation.openDrawer()}>
					<Entypo name={'menu'} size={30} color='black' />
				</Pressable>
			</View>
		</View>
	);
};
export default RideMap;
