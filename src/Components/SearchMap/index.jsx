import React, { useState, useEffect, useRef } from 'react';
import { Image, View, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { useSelector } from 'react-redux';
const SearchMap = (props) => {
	const [region, setRegion] = useState({
		latitudeDelta: 0.0222,
		longitudeDelta: 0.0121,
		latitude: 21.209934,
		longitude: 72.873976,
	});
	const originRegion = useSelector((state) => state.api.origin);
	const mapRef = useRef(null);

	//console.log(region);
	const onChangeValue = (region) => {
		setRegion(region);
		// alert(JSON.stringify(region));
	};
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
		});
	};
	//alert(JSON.stringify(region));

	return (
		<View>
			<MapView
				style={{ width: '100%', height: '100%' }}
				provider={PROVIDER_GOOGLE}
				customMapStyle={require('../../assets/mapStyle.json')}
				initialRegion={region}
				onRegionChangeComplete={onChangeValue}
				showsUserLocation={true}
				showsMyLocationButton={false}
				ref={mapRef}
			/>
			<View style={styles.icon}>
				<Image
					style={{ height: 40, width: 40, resizeMode: 'contain' }}
					source={require('../../assets/images/map-pin.png')}
				/>
			</View>
			<View style={styles.position}>
				<Pressable onPress={userCurrentLocation}>
					<MaterialIcons name='my-location' size={30} color='black' />
				</Pressable>
			</View>
		</View>
	);
};
export default SearchMap;
