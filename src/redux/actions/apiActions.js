import * as actionTypes from '../actionTypes';
import axios from 'axios';
import { useSelector } from 'react-redux';
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
export const getDestination = (placeid, op) => {
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
				getDistanceDuration(
					dispatch,
					op,
					response.data.result.geometry.location
				);
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

export const getDistanceDuration = async (dispatch, op, dp) => {
	return axios
		.get(
			`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${op.latitude},${op.longitude}&destinations=${dp.lat},${dp.lng}&key=${GOOGLE_API}
				`
		)
		.then((response) => {
			dispatch({
				type: actionTypes.GET_DISTANCE_DURATION,
				distance: response.data.rows[0].elements[0].distance.value,
				distText: response.data.rows[0].elements[0].distance.text,
				duration: response.data.rows[0].elements[0].duration.value,
				durText: response.data.rows[0].elements[0].duration.text,
			});
		})
		.catch((error) => {
			console.log('getDistanceDuration error', error);
		});
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

export const setPlaceid = (id, name, flag) => {
	if (flag === 'origin') {
		return {
			type: actionTypes.SET_ORIGIN_PLACE_DATA,
			originPlaceid: id,
			originName: name,
		};
	}
	if (flag === 'destination') {
		return {
			type: actionTypes.SET_DESTIN_PLACE_DATA,
			destinationPlaceid: id,
			destinationName: name,
		};
	}
};

export const setOrigin = (location) => {
	return {
		type: actionTypes.GET_ORIGIN,
		origin: location,
	};
};
export const setDestination = (location) => {
	return {
		type: actionTypes.GET_DESTINATION,
		destination: location,
	};
};
export const setRideFare = (fare) => {
	return {
		type: actionTypes.SET_RIDE_FARE,
		fare: fare,
	};
};
