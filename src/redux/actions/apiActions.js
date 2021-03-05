import * as actionTypes from '../actionTypes';
import axios from 'axios';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

export const getOrigin = (placeid) => {
	return (dispatch) => {
		return axios
			.get(
				`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${GOOGLE_API}`
			)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_ORIGIN,
					origin: response.data.result.geometry.location,
				});
			})
			.catch((error) => {
				console.log('getOrigin error', error);
			});
	};
};

export const getDestination = (placeid) => {
	return (dispatch) => {
		return axios
			.get(
				`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${GOOGLE_API}`
			)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_DESTINATION,
					destination: response.data.result.geometry.location,
				});
			})
			.catch((error) => {
				console.log('getDestination error', error);
			});
	};
};

export const getOriginPediction = (input) => {
	return (dispatch) => {
		return axios
			.get(
				`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_API}`
			)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_ORIGIN_PREDICTION,
					originPredictions: response.data.predictions,
				});
			})
			.catch((error) => {
				console.log('getOriginPediction error', error);
			});
	};
};

export const getDestinationPediction = (input) => {
	return (dispatch) => {
		return axios
			.get(
				`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_API}`
			)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_DESTINATION_PREDICTION,
					destinationPredictions: response.data.predictions,
				});
			})
			.catch((error) => {
				console.log('getDestinationPediction error', error);
			});
	};
};

export const getDistanceDuration = (placeid, op, dp) => {
	// console.log('placeid----------------', placeid);
	// console.log('op-----', op);
	// console.log('dp-----', dp);
	return (dispatch) => {
		return axios
			.get(
				`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${op.lat},${op.lng}&destinations=${dp.lat},${dp.lng}&key=${GOOGLE_API}
				`
			)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_DISTANCE_DURATION,
					distance: response.data.rows[0].elements[0].distance.value,
					duration: response.data.rows[0].elements[0].duration.value,
				});
			})
			.catch((error) => {
				console.log('getDistanceDuration error', error);
			});
	};
};
// export const getDistanceDuration = (placeid, op, dp) => {
// 	console.log('placeid----------------', placeid);
// 	console.log('op-----', op);
// 	console.log('dp-----', dp);
// 	return (dispatch) => {
// 		return axios
// 			.get(
// 				`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=place_id:${placeid.originPlaceid}&destinations=place_id:${placeid.destinationPlaceid}&key=${GOOGLE_API}
// 				`
// 			)
// 			.then((response) => {
// 				dispatch({
// 					type: actionTypes.GET_DISTANCE,
// 					distance: response.data.rows[0].elements[0].distance.value,
// 				});
// 			})
// 			.catch((error) => {
// 				console.log('getDistanceDuration error', error);
// 			});
// 	};
// };

export const setPlaceid = (id, flag) => {
	if (flag === 'origin') {
		return {
			type: actionTypes.SET_ORIGIN_PLACE_ID,
			originPlaceid: id,
		};
	}
	if (flag === 'destination') {
		return {
			type: actionTypes.SET_DESTIN_PLACE_ID,
			destinationPlaceid: id,
		};
	}
};
