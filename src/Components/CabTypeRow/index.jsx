import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import * as apiActions from '../../redux/actions/apiActions';
import { useDispatch } from 'react-redux';
const CabTypeRow = (props) => {
	const dispatch = useDispatch();

	//console.log('props', props);
	const { type, onPress, isSelected, setSelectedFare } = props;
	const tripParam = useSelector((state) => state.api.tripParam);

	const getImage = () => {
		if (type.type === 'UberX') {
			return require('../../assets/images/UberX.jpeg');
		}
		if (type.type === 'Comfort') {
			return require('../../assets/images/Comfort.jpeg');
		}
		return require('../../assets/images/UberXL.jpeg');
	};

	const calculateFare = (tripParam, timeCost, distCost, surge) => {
		const pricePerMin = timeCost * (tripParam.duration / 60);
		const pricePerKm = (distCost * tripParam.distance) / 1000;
		const totalFare = (pricePerMin + pricePerKm) * surge;
		return Math.round(totalFare);
	};
	const getPrice = () => {
		if (type.type === 'RideCX') {
			const timeCost = 6;
			const distCost = 6;
			const surge = 1.5;
			return calculateFare(tripParam, timeCost, distCost, surge);
		}
		if (type.type === 'Comfort') {
			const timeCost = 6;
			const distCost = 8;
			const surge = 2;
			return calculateFare(tripParam, timeCost, distCost, surge);
		}
		if (type.type === 'RideCXL') {
			const timeCost = 6;
			const distCost = 10;
			const surge = 2.25;
			return calculateFare(tripParam, timeCost, distCost, surge);
		}
	};

	return (
		<Pressable
			onPress={() => {
				onPress();
				//setSelectedFare( getPrice() );
				dispatch(apiActions.setRideFare(getPrice()));
			}}
			style={[
				styles.container,
				{ backgroundColor: isSelected ? '#546de7' : 'white' },
			]}
		>
			{/* Image of Cab */}
			<Image style={styles.image} source={getImage()} />
			<View style={styles.middleContainer}>
				<Text style={styles.cabtype}>
					{type.type}{' '}
					<Ionicons name='person' size={18} color='black' />3
				</Text>
				{/* <Text style={styles.time}>04:50PM drop off</Text> */}
			</View>
			<View style={styles.rightContainer}>
				<Ionicons name='pricetag' size={24} color='green' />
				<Text style={styles.price}>est. ₹{getPrice()}</Text>
			</View>
		</Pressable>
	);
};
export default CabTypeRow;
