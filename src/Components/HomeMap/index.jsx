import React from 'react';
import { StyleSheet, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import cars from '../../assets/data/cars';
const HomeMap = (props) => {
	const getImage = (type) => {
		if (type === 'UberX') {
			return require('../../assets/images/top-UberX.png');
		}
		if (type === 'Comfort') {
			return require('../../assets/images/top-Comfort.png');
		}
		return require('../../assets/images/top-UberXL.png');
	};
	return (
		<MapView
			style={{ width: '100%', height: '100%' }}
			provider={PROVIDER_GOOGLE}
			customMapStyle={require('../../assets/mapStyle.json')}
			initialRegion={{
				latitude: 21.209934,
				longitude: 72.873976,
				latitudeDelta: 0.0222,
				longitudeDelta: 0.0121,
			}}
		>
			{cars.map((car) => (
				<Marker
					key={car.id}
					coordinate={{
						latitude: car.latitude,
						longitude: car.longitude,
					}}
				>
					<Image
						style={{
							width: 50,
							height: 50,
							resizeMode: 'contain',
							transform: [{ rotate: `${car.heading}deg` }],
						}}
						source={getImage(car.type)}
					/>
				</Marker>
			))}
		</MapView>
	);
};
export default HomeMap;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#bdd3fd',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
