import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const SettingScreen = (props) => {
	const ratingCompleted = (r) => {
		alert('Rating is ' + r);
	};
	return (
		<View>
			<Text style={{ fontSize: 30 }}>This is Setting Screen</Text>
			<Rating
				showRating
				onFinishRating={ratingCompleted}
				style={{ paddingVertical: 10 }}
			/>
		</View>
	);
};
export default SettingScreen;

const styles = StyleSheet.create({});
