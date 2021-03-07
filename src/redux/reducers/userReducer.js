import * as actionTypes from '../actionTypes';

const initialState = {
	uid: '',
	first_name: '',
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
				first_name: action.fname,
			};

		default:
			return state;
	}
};
export default userReducer;
