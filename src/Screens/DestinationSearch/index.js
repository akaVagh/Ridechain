import React, { useEffect, useRef, useState } from 'react';
import {
	View,
	Pressable,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import SearchMap from '../../Components/SearchMap';
import { useDispatch, useSelector } from 'react-redux';
import * as apiActions from '../../redux/actions/apiActions';

const DestinationSearch = () => {
	const originPlace = useSelector((state) => state.api.origin);
	const destinationPlace = useSelector((state) => state.api.destination);
	const originPredictions = useSelector(
		(state) => state.api.originPredictions
	);
	const destinationPredictions = useSelector(
		(state) => state.api.destinationPredictions
	);
	const placeid = useSelector((state) => state.api.placeid);
	const tripParam = useSelector((state) => state.api.tripParam);
	console.log('tripParam', tripParam);
	const dispatch = useDispatch();

	const navigation = useNavigation();
	const [searchInputFrom, setsearchInputFrom] = useState('');
	const [searchInputTo, setsearchInputTo] = useState('');
	const [toggleSearchFrom, settoggleSearchFrom] = useState(false);
	const [toggleSearchTo, settoggleSearchTo] = useState(false);
	const [toggleButton, settoggleButton] = useState({
		from: false,
		to: false,
	});
	const nextInp = useRef();

	const setToggleFromTrue = () => {
		settoggleSearchFrom(true);
	};

	const setToggleFromFalse = () => {
		settoggleSearchFrom(false);
	};

	const getInputFrom = (searchInputFrom) => {
		setsearchInputFrom(searchInputFrom);
	};

	const setToggleToTrue = () => {
		settoggleSearchTo(true);
	};
	const setToggleToFalse = () => {
		settoggleSearchTo(false);
	};
	const getInputTo = (searchInputTo) => {
		setsearchInputTo(searchInputTo);
	};
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.backBtn}>
					<Pressable
						onPress={() => navigation.navigate('Home Screen')}
					>
						<Ionicons name='arrow-back' size={30} color='black' />
					</Pressable>
					<TextInput
						style={styles.inpTxt}
						placeholder='Where From?'
						value={searchInputFrom}
						onChangeText={getInputFrom}
						onTextInput={() => {
							dispatch(
								apiActions.getOriginPediction(searchInputFrom)
							);
						}}
						onChange={setToggleFromTrue}
						// TODO: Add clear text button
						onFocus={setToggleToFalse}
					/>
					<TextInput
						style={styles.inpTxt}
						placeholder='Where To?'
						value={searchInputTo}
						onChangeText={getInputTo}
						ref={nextInp}
						onTextInput={() => {
							dispatch(
								apiActions.getDestinationPediction(
									searchInputTo
								)
							);
						}}
						onChange={setToggleToTrue}
						onFocus={setToggleFromFalse}
					/>
				</View>
			</View>

			{toggleSearchFrom === true && toggleSearchTo == false && (
				<View style={styles.listWindow}>
					<TouchableOpacity
						style={styles.inputBox}
						onPress={setToggleFromFalse}
					>
						<View style={styles.hideList}>
							<AntDesign name='down' size={20} color='black' />
						</View>
					</TouchableOpacity>
					<FlatList
						data={originPredictions}
						keyExtractor={(item) => item.place_id}
						renderItem={({ item }) => (
							<View>
								<TouchableOpacity
									style={styles.inputBox}
									onPressIn={() => {
										settoggleButton({
											from: true,
											to: false,
										});
										setsearchInputFrom(item.description);
										dispatch(
											apiActions.getOrigin(item.place_id)
										);
										dispatch(
											apiActions.setPlaceid(
												item.place_id,
												'origin'
											)
										);
									}}
									onPressOut={() => nextInp.current.focus()}
								>
									<View style={styles.listContainer}>
										<View style={styles.iconContainer}>
											<MaterialIcons
												name='location-pin'
												size={25}
												color='white'
											/>
										</View>
										<View style={styles.listNames}>
											<Text style={styles.primaryText}>
												{
													item.structured_formatting
														.main_text
												}
											</Text>
											<Text style={styles.secondaryText}>
												{
													item.structured_formatting
														.secondary_text
												}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							</View>
						)}
					/>
				</View>
			)}

			{toggleSearchTo === true && (
				<View style={styles.listWindow}>
					<TouchableOpacity
						style={styles.inputBox}
						onPress={setToggleToFalse}
					>
						<View style={styles.hideList}>
							<AntDesign name='down' size={20} color='black' />
						</View>
					</TouchableOpacity>
					<FlatList
						data={destinationPredictions}
						keyExtractor={(item) => item.place_id}
						renderItem={({ item }) => (
							<View>
								<TouchableOpacity
									style={styles.inputBox}
									onPressIn={() => {
										setToggleToFalse();
										settoggleButton({
											...toggleButton,
											to: true,
										});
										setsearchInputTo(item.description);
										dispatch(
											apiActions.getDestination(
												item.place_id
											)
										);
										dispatch(
											apiActions.setPlaceid(
												item.place_id,
												'destination'
											)
										);
									}}
								>
									<View style={styles.listContainer}>
										<View style={styles.iconContainer}>
											<MaterialIcons
												name='location-pin'
												size={25}
												color='white'
											/>
										</View>
										<View style={styles.listNames}>
											<Text style={styles.primaryText}>
												{
													item.structured_formatting
														.main_text
												}
											</Text>
											<Text style={styles.secondaryText}>
												{
													item.structured_formatting
														.secondary_text
												}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							</View>
						)}
					/>
				</View>
			)}
			<View style={styles.mapContainer}>
				<SearchMap />
			</View>
			{toggleButton.from === true && toggleButton.to === true && (
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							navigation.navigate('Search Results', {
								originPlace,
								destinationPlace,
								placeid,
							});
							dispatch(
								apiActions.getDistanceDuration(
									placeid,
									originPlace,
									destinationPlace
								)
							);
						}}
					>
						<Text
							style={{
								color: '#fff',
								fontSize: 18,
								fontWeight: 'bold',
							}}
						>
							Find Ride
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};
export default DestinationSearch;
