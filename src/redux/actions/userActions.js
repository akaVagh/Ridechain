import * as actionTypes from '../actionTypes';
import axios from 'axios';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

export const setUserId = (userId) => {
	return {
		type: actionTypes.SET_USER_ID,
		uid: userId,
	};
};
export const setUserData = (data) => {
	return {
		type: actionTypes.SET_USER_DATA,
		fname: data.first_name,
		lname: data.last_name,
		mobile: data.mobileNo,
		email: data.email,
		imgUrl: data.userImg,
	};
};
