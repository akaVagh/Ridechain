import * as actionTypes from '../actionTypes';

const initialState = {
	uid: '',
	userData: {},
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USER_ID:
			return {
				...state,
				uid: action.uid,
			};
		case actionTypes.SET_USER_DATA:
			return {
				...state,
				userData: action.userData,
			};

		default:
			return state;
	}
};
export default userReducer;
