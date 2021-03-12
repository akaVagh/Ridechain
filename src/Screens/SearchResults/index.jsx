import * as firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { View, Dimensions, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import CabTypes from '../../Components/CabTypes';
import RouteMap from '../../Components/RouteMap';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

const SearchResults = (props) => {
	const uid = useSelector((state) => state.user.uid);
	const origin = useSelector((state) => state.api.origin);
	const destination = useSelector((state) => state.api.destination);
	const rideFare = useSelector((state) => state.api.rideFare);
	const typeState = useState(null);
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
					TotalFare: rideFare,
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
				<CabTypes typeState={typeState} onSubmit={onSubmit} />
			</View>
		</View>
	);
};
export default SearchResults;
