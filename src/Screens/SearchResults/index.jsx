import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import CabTypes from '../../Components/CabTypes';
import RouteMap from '../../Components/RouteMap';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

const SearchResults = (props) => {
	const origin = useSelector((state) => state.api.origin);
	const destination = useSelector((state) => state.api.destination);

	return (
		<View style={{ display: 'flex', justifyContent: 'space-between' }}>
			<View style={{ height: Dimensions.get('window').height - 400 }}>
				<RouteMap origin={origin} destination={destination} />
			</View>
			<View style={{ height: 400 }}>
				<CabTypes />
			</View>
		</View>
	);
};
export default SearchResults;
