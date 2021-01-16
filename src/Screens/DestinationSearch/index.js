import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        console.warn('useEffect is called');
        if (originPlace && destinationPlace) {
            console.warn('Redirect to results');
        }
    }, [originPlace, destinationPlace]);

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where from?'
                // onPress={(data, details = null) => {
                //     setOriginPlace({ data, details });
                //  }}
                styles={{ textInput: styles.inpTxt }}
                query={{
                    key: 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q',
                    language: 'en',
                }}
            />
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                // onPress={(data, details = null) => {
                //     setDestinationPlace({ data, details });
                // }}
                onPress={() => navigation.navigate('Search Results')}
                styles={{ textInput: styles.inpTxt }}
                query={{
                    key: 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q',
                    language: 'en',
                }}
            />
        </View>
    );
};
export default DestinationSearch;
