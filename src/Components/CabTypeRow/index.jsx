import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const CabTypeRow = (props) => {
	const { type, onPress, isSelected, calculateFare } = props;
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

	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.container,
				{ backgroundColor: isSelected ? '#efefef' : 'white' },
			]}
		>
			{/* Image of Cab */}
			<Image style={styles.image} source={getImage()} />
			<View style={styles.middleContainer}>
				<Text style={styles.cabtype}>
					{type.type}{' '}
					<Ionicons name='person' size={18} color='black' />3
				</Text>
				<Text style={styles.time}>04:50PM drop off</Text>
			</View>
			<View style={styles.rightContainer}>
				<Ionicons name='pricetag' size={24} color='green' />
				<Text style={styles.price}>
					est. ₹{calculateFare(tripParam)}
				</Text>
			</View>
		</Pressable>
	);
};
export default CabTypeRow;
