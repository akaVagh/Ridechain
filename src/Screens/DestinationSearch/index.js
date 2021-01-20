import React, { useEffect, useState } from 'react';
import { View, Pressable, FlatList, Text } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SearchMap from '../../Components/SearchMap';

import DATA from '../../assets/data/types';
import { Fontisto } from '@expo/vector-icons';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState([]);
    const [originPrediction, setoriginPrediction] = useState([]);
    const [destinationPlace, setDestinationPlace] = useState([]);
    const [destinationPrediction, setdestinationPrediction] = useState([]);
    const navigation = useNavigation();
    const [searchInput, setsearchInput] = useState({ input: '' });

    const getInputFrom = (searchInput) => {
        const key = '';
        setsearchInput({
            input: searchInput,
        });
        // console.log('------Input---------------');
        console.log(searchInput);
    };

    const getOrigin = (id, key) => {
        fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${key}`
        )
            .then((response) => response.json())
            .then((originPlace) =>
                setOriginPlace(originPlace.result.geometry.location)
            );
    };
    const getDestination = (id, key) => {
        fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${key}`
        )
            .then((response) => response.json())
            .then((destinationPlace) =>
                setDestinationPlace(destinationPlace.result.geometry.location)
            );
    };

    console.log(originPlace);
    console.log(destinationPlace);
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.backBtn}>
                    <Pressable
                        onPress={() => navigation.navigate('Home Screen')}
                    >
                        <Ionicons name='arrow-back' size={30} color='black' />
                    </Pressable>
                </View>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data = null) => {
                        console.log(data);
                        getOrigin(data.place_id, GOOGLE_API);
                    }}
                    textInputProps={{
                        onChangeText: getInputFrom,
                    }}
                    styles={{
                        textInput: styles.inpTxt,
                    }}
                    query={{
                        key: GOOGLE_API,
                        language: 'en',
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        getDestination(data.place_id, GOOGLE_API),
                            navigation.navigate('Search Results');
                    }}
                    styles={{ textInput: styles.inpTxt }}
                    query={{
                        key: GOOGLE_API,
                        language: 'en',
                    }}
                />
            </View>

            {/* <View style={styles.mapContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={styles.listContainer}>
                            <View style={styles.iconContainer}>
                                <MaterialIcons
                                    name='location-pin'
                                    size={25}
                                    color='white'
                                />
                            </View>
                            <Text style={styles.listText}>{item.type}</Text>
                        </View>
                    )}
                />
            </View> */}
            <View style={styles.mapContainer}>
                <SearchMap />
            </View>
        </View>
    );
};
export default DestinationSearch;
