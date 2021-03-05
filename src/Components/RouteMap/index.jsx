import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';
import DestinationSearch from '../../Screens/DestinationSearch';

const RouteMap = (props) => {
	const origin = useSelector((state) => state.api.origin);
	const destination = useSelector((state) => state.api.destination);
	const GOOGLE_MAPS_APIKEY = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';
	const originRegion = {
		latitude: origin.latitude,
		longitude: origin.longitude,
	};
	const destinationRegion = {
		latitude: destination.latitude,
		longitude: destination.longitude,
	};
	return (
		<MapView
			style={{ width: '100%', height: '100%' }}
			provider={PROVIDER_GOOGLE}
			customMapStyle={require('../../assets/mapStyle.json')}
			initialRegion={{
				latitude: origin.latitude,
				longitude: origin.longitude,
				latitudeDelta: 0.0222,
				longitudeDelta: 0.0121,
			}}
		>
			<MapViewDirections
				origin={originRegion}
				destination={destinationRegion}
				apikey={GOOGLE_MAPS_APIKEY}
				strokeWidth={5}
				strokeColor='black'
			/>
			<Marker
				coordinate={{
					latitude: origin.latitude,
					longitude: origin.longitude,
				}}
				title={'Pick up'}
			/>
			<Marker
				coordinate={{
					latitude: destination.latitude,
					longitude: destination.longitude,
				}}
				title={'Drop off'}
			/>
		</MapView>
	);
};
export default RouteMap;
