import * as actionTypes from '../actionTypes';

const initialState = {
	origin: { latitude: '', longitude: '' },
	destination: { latitude: '', longitude: '' },
	originPredictions: [],
	destinationPredictions: [],
	place: {},
	tripParam: {},
	rideFare: null,
};

const apiReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ORIGIN:
			return {
				...state,
				origin: {
					...state.origin,
					latitude: action.origin.lat,
					longitude: action.origin.lng,
				},
			};
		case actionTypes.GET_DESTINATION:
			return {
				...state,
				destination: {
					...state.destination,
					latitude: action.destination.lat,
					longitude: action.destination.lng,
				},
			};
		case actionTypes.GET_ORIGIN_PREDICTION:
			return {
				...state,
				originPredictions: action.originPredictions,
			};
		case actionTypes.GET_DESTINATION_PREDICTION:
			return {
				...state,
				destinationPredictions: action.destinationPredictions,
			};
		case actionTypes.SET_ORIGIN_PLACE_DATA:
			return {
				...state,
				place: {
					...state.place,
					originPlaceid: action.originPlaceid,
					originName: action.originName,
				},
			};
		case actionTypes.SET_DESTIN_PLACE_DATA:
			return {
				...state,
				place: {
					...state.place,
					destinationPlaceid: action.destinationPlaceid,
					destinationName: action.destinationName,
				},
			};
		case actionTypes.GET_DISTANCE_DURATION:
			return {
				...state,
				tripParam: {
					...state.tripParam,
					distance: action.distance,
					distText: action.distText,
					duration: action.duration,
					durText: action.durText,
				},
			};
		case actionTypes.SET_RIDE_FARE:
			return {
				...state,
				rideFare: action.fare,
			};
		default:
			return state;
	}
};
export default apiReducer;
