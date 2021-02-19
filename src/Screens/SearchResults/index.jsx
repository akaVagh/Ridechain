import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import CabTypes from '../../Components/CabTypes';
import RouteMap from '../../Components/RouteMap';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

const SearchResults = (props) => {
	// const [fareParams, setfareParams] = useState({
	// 	distance: '',
	// 	duration: '',
	// });
	// const [totalFare, settotalFare] = useState();
	// const getDistanceParam = () => {
	// 	fetch(
	// 		`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=place_id:${props.route.params.placeid.originPlaceId}&destinations=place_id:${props.route.params.placeid.destinationPlaceId}&key=${GOOGLE_API}
	//         `
	// 	)
	// 		.then((response) => response.json())
	// 		.then((param) => {
	// 			setfareParams({
	// 				distance: param?.rows[0]?.elements[0]?.distance,
	// 				distance: param?.rows[0]?.elements[0]?.duration,
	// 			});
	// 		});
	// };

	// useEffect(() => {
	// 	getDistanceParam();
	// });
	return (
		<View style={{ display: 'flex', justifyContent: 'space-between' }}>
			<View style={{ height: Dimensions.get('window').height - 400 }}>
				<RouteMap
					origin={props.route.params.originPlace}
					destination={props.route.params.destinationPlace}
					//placeid={props.route.params.placeid}
				/>
			</View>
			<View style={{ height: 400 }}>
				<CabTypes />
			</View>
		</View>
	);
};
export default SearchResults;
