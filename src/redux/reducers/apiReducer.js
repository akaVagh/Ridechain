import * as actionTypes from '../actionTypes';

const initialState = {
	origin: {},
	destination: {},
	originPredictions: [],
	destinationPredictions: [],
	placeid: {},
	tripParam: {},
};

const apiReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ORIGIN:
			return {
				...state,
				origin: action.origin,
			};
		case actionTypes.GET_DESTINATION:
			return {
				...state,
				destination: action.destination,
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
		case actionTypes.GET_DISTANCE_DURATION:
			return {
				...state,
				tripParam: {
					...state.tripParam,
					distance: action.distance,
					duration: action.duration,
				},
			};
		default:
			return state;
	}
};
export default apiReducer;
