import * as firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import CabTypes from '../../Components/CabTypes';
import RouteMap from '../../Components/RouteMap';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

const SearchResults = (props) => {
	const uid = useSelector((state) => state.user.uid);
	const origin = useSelector((state) => state.api.origin);
	const destination = useSelector((state) => state.api.destination);
	const tripParam = useSelector((state) => state.api.tripParam);

	const calculateFare = (tripParam, surge = 2) => {
		const pricePerMin = 6 * (tripParam.duration / 60);
		const pricePerKm = (6 * tripParam.distance) / 1000;
		const totalFare = (pricePerMin + pricePerKm) * surge;
		return Math.round(totalFare);
	};
	const fare = calculateFare(tripParam);
	console.log('fare', fare);
	const typeState = useState(null);
	console.log('typeState', typeState[0]);
	const onSubmit = async () => {
		const [type] = typeState;
		if (!type) {
			return;
		}
		try {
			firebase
				.firestore()
				.collection('orders')
				.doc()
				.set({
					userId: uid,
					CabType: type,
					origin: origin,
					destination: destination,
					TotalFare: fare,
					createdAt: firebase.firestore.Timestamp.fromDate(
						new Date()
					),
				});
		} catch (error) {
			console.log('error', error);
		}
	};
	return (
		<View style={{ display: 'flex', justifyContent: 'space-between' }}>
			<View style={{ height: Dimensions.get('window').height - 400 }}>
				<RouteMap />
			</View>
			<View style={{ height: 400 }}>
				<CabTypes
					typeState={typeState}
					onSubmit={onSubmit}
					calculateFare={calculateFare}
				/>
			</View>
		</View>
	);
};
export default SearchResults;
