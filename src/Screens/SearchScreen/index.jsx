import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import * as apiActions from '../../redux/actions/apiActions';
import PlaceRow from './PlaceRow';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = (props) => {
	const origin = useSelector((state) => state.api.origin);
	const destination = useSelector((state) => state.api.destination);
	console.log('origin', origin);
	console.log('destination', destination);
	const dispatch = useDispatch();
	const navigation = useNavigation();

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<GooglePlacesAutocomplete
					placeholder='Where from?'
					onPress={(data, details = null) => {
						dispatch(
							apiActions.setOrigin(details.geometry.location)
						);
					}}
					enablePoweredByContainer={false}
					suppressDefaultStyles
					currentLocation={true}
					currentLocationLabel='Current location'
					styles={{
						textInput: styles.textInput,
						container: styles.autocompleteContainer,
						listView: styles.listView,
						separator: styles.separator,
					}}
					fetchDetails
					query={{
						key: GOOGLE_API,
						language: 'en',
					}}
					renderRow={(data) => <PlaceRow data={data} />}
					renderDescription={(data) =>
						data.description || data.vicinity
					}
					//predefinedPlaces={[homePlace, workPlace]}
				/>

				<GooglePlacesAutocomplete
					placeholder='Where to?'
					onPress={(data, details = null) => {
						dispatch(
							apiActions.setDestination(details.geometry.location)
						);
						navigation.navigate('Search Results');
					}}
					enablePoweredByContainer={false}
					suppressDefaultStyles
					styles={{
						textInput: styles.textInput,
						container: {
							...styles.autocompleteContainer,
							top: 55,
						},
						separator: styles.separator,
					}}
					fetchDetails
					query={{
						key: GOOGLE_API,
						language: 'en',
					}}
					renderRow={(data) => <PlaceRow data={data} />}
				/>

				{/* Circle near Origin input */}
				<View style={styles.circle} />

				{/* Line between dots */}
				<View style={styles.line} />

				{/* Square near Destination input */}
				<View style={styles.square} />
			</View>
		</SafeAreaView>
	);
};
export default SearchScreen;
