import React, { useEffect, useState } from 'react';
import { View, Pressable, FlatList, Text, TextInput } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import SearchMap from '../../Components/SearchMap';

import DATA from '../../assets/data/types';
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState([]);
    const [originPrediction, setoriginPrediction] = useState([]);
    const [destinationPrediction, setdestinationPrediction] = useState([]);
    const [destinationPlace, setDestinationPlace] = useState([]);
    const navigation = useNavigation();
    const [searchInputFrom, setsearchInputFrom] = useState('');
    const [searchInputTo, setsearchInputTo] = useState('');
    const [toggleSearch, settoggleSearch] = useState(false);
    console.log(toggleSearch);

    const setToggleTrue = () => {
        settoggleSearch(true);
    };
    const setToggleFalse = () => {
        settoggleSearch(false);
    };

    const getInputFrom = (searchInputFrom) => {
        setsearchInputFrom(searchInputFrom);
        console.log(searchInputFrom);
    };
    const getInputTo = (searchInputTo) => {
        setsearchInputTo(searchInputTo);
        console.log(searchInputTo);
    };

    const getOriginPediction = (input, key) => {
        fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${key}`
        )
            .then((response) => response.json())
            .then((originPrediction) =>
                setoriginPrediction(originPrediction.predictions)
            );
        console.log('From where?:--', originPrediction);
    };

    const getDestinationPediction = (input, key) => {
        fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${key}`
        )
            .then((response) => response.json())
            .then((destinationPrediction) =>
                setdestinationPrediction(destinationPrediction)
            );
        console.log(destinationPrediction);
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
                    <TextInput
                        style={styles.inpTxt}
                        placeholder='Where From?'
                        onChangeText={getInputFrom}
                        onTextInput={() =>
                            getOriginPediction(searchInputFrom, GOOGLE_API)
                        }
                        onFocus={setToggleTrue}
                        onBlur={setToggleFalse}
                    />
                    <TextInput
                        style={styles.inpTxt}
                        placeholder='Where To?'
                        onChangeText={getInputTo}
                        onFocus={setToggleTrue}
                        onBlur={setToggleFalse}
                    />
                </View>
            </View>
            {toggleSearch === true && (
                <View style={styles.mapContainer}>
                    <FlatList
                        data={originPrediction}
                        renderItem={({ item }) => (
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
                                        {item.structured_formatting.main_text}
                                    </Text>
                                    <Text style={styles.secondaryText}>
                                        {
                                            item.structured_formatting
                                                .secondary_text
                                        }
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            )}
            <View style={styles.mapContainer}>
                <SearchMap />
            </View>
        </View>
    );
};
export default DestinationSearch;
