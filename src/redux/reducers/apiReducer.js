import * as actionTypes from '../actionTypes';

const initialState = {
	origin: { latitude: '', longitude: '' },
	destination: { latitude: '', longitude: '' },
	originPredictions: [],
	destinationPredictions: [],
	placeid: {},
	tripParam: {},
	uid: '',
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
		case actionTypes.SET_ORIGIN_PLACE_ID:
			return {
				...state,
				placeid: {
					...state.placeid,
					originPlaceid: action.originPlaceid,
				},
			};
		case actionTypes.SET_DESTIN_PLACE_ID:
			return {
				...state,
				placeid: {
					...state.placeid,
					destinationPlaceid: action.destinationPlaceid,
				},
			};
		case actionTypes.SET_USER_ID:
			return {
				...state,
				uid: action.uid,
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
		case actionTypes.SET_USER_ID:
			return {
				...state,
				uid: action.uid,
			};
		default:
			return state;
	}
};
export default apiReducer;
