import * as actionTypes from '../actionTypes';
import axios from 'axios';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

export const setUserId = (userId) => {
	return {
		type: actionTypes.SET_USER_ID,
		uid: userId,
	};
};
export const setUserdata = (data) => {
	return {
		type: actionTypes.SET_USER_ID,
		userData: data,
	};
};
