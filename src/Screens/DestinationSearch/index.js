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
const GOOGLE_API = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';

const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState([]);
    const [originPrediction, setoriginPrediction] = useState([]);
    const [destinationPrediction, setdestinationPrediction] = useState([]);
    const [destinationPlace, setDestinationPlace] = useState([]);
    const navigation = useNavigation();
    const [searchInputFrom, setsearchInputFrom] = useState('');
    const [searchInputTo, setsearchInputTo] = useState('');
    const [toggleSearchFrom, settoggleSearchFrom] = useState(false);
    const [toggleSearchTo, settoggleSearchTo] = useState(false);

    const setToggleFromTrue = () => {
        settoggleSearchFrom(true);
    };
    const setToggleFromFalse = () => {
        settoggleSearchFrom(false);
    };
    const getInputFrom = (searchInputFrom) => {
        setsearchInputFrom(searchInputFrom);
        console.log(searchInputFrom);
    };

    const setToggleToTrue = () => {
        settoggleSearchTo(true);
    };
    const setToggleToFalse = () => {
        settoggleSearchTo(false);
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
                setdestinationPrediction(destinationPrediction.predictions)
            );
        console.log('From to?:--', destinationPrediction);
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
                    <Pressable>
                        <Ionicons name='arrow-back' size={30} color='black' />
                    </Pressable>
                    <TextInput
                        style={styles.inpTxt}
                        placeholder='Where From?'
                        onChangeText={getInputFrom}
                        onTextInput={() =>
                            getOriginPediction(searchInputFrom, GOOGLE_API)
                        }
                        onChange={setToggleFromTrue}
                        onFocus={setToggleFromTrue}
                        onBlur={setToggleFromFalse}
                    />
                    <TextInput
                        style={styles.inpTxt}
                        placeholder='Where To?'
                        onChangeText={getInputTo}
                        onTextInput={() =>
                            getDestinationPediction(searchInputTo, GOOGLE_API)
                        }
                        onChange={setToggleToTrue}
                        onFocus={setToggleToTrue}
                        onBlur={setToggleToFalse}
                    />
                </View>
            </View>

            {toggleSearchFrom === true && (
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
                        data={originPrediction}
                        keyExtractor={(item) => item.place_id}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity
                                    style={styles.inputBox}
                                    onPress={() =>
                                        navigation.navigate('Search Results')
                                    }
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
                        data={destinationPrediction}
                        keyExtractor={(item) => item.place_id}
                        renderItem={({ item }) => (
                            <View>
                                <View></View>
                                <TouchableOpacity
                                    style={styles.inputBox}
                                    onPress={() =>
                                        navigation.navigate('Search Results')
                                    }
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
        </View>
    );
};
export default DestinationSearch;
