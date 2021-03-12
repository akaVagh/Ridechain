import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import CabTypeRow from '../CabTypeRow';
import typesData from '../../assets/data/types';
import * as apiActions from '../../redux/actions/apiActions';
import { useDispatch } from 'react-redux';

const CabTypes = ({ typeState, onSubmit }) => {
	const dispatch = useDispatch();
	const [selectedType, setSelectedType] = typeState;
	//const [selectedFare, setSelectedFare] = useState(null);
	return (
		<View>
			{typesData.map((type) => (
				<CabTypeRow
					type={type}
					key={type.id}
					isSelected={type.type === selectedType}
					onPress={() => {
						setSelectedType(type.type);
					}}
					//setSelectedFare={setSelectedFare}
				/>
			))}
			<Pressable
				onPress={onSubmit}
				style={{
					padding: 10,
					margin: 10,
					backgroundColor: 'black',
					alignItems: 'center',
				}}
			>
				<Text
					style={{ fontWeight: 'bold', fontSize: 20, color: '#eee' }}
				>
					Confirm Ride
				</Text>
			</Pressable>
		</View>
	);
};
export default CabTypes;
