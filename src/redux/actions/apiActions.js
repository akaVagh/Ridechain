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
			});
	};
};

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
