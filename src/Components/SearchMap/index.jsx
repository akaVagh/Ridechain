import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
const SearchMap = (props) => {
    const [region, setRegion] = useState({
        latitude: 21.209934,
        longitude: 72.873976,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
    });
    console.log(region);
    const onChangeValue = (region) => {
        setRegion(region);
        // alert(JSON.stringify(region));
    };
    useEffect(() => {
        userCurrentLocation();
    }, []);

    const userCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            alert(JSON.stringify(pos));
            setRegion({
                initialRegion,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
    };

    return (
        <View>
            <MapView
                style={{ width: '100%', height: '100%' }}
                provider={PROVIDER_GOOGLE}
                customMapStyle={require('../../assets/mapStyle.json')}
                initialRegion={region}
                onRegionChangeComplete={onChangeValue}
                showsMyLocationButton={true}
                showsUserLocation={true}
                ref={(position) => position}
            />
            <View style={styles.icon}>
                <Image
                    style={{ height: 50, width: 50, resizeMode: 'contain' }}
                    source={require('../../assets/images/map-pin.png')}
                />
            </View>
            <View style={styles.position}>
                <MaterialIcons name='my-location' size={30} color='black' />
            </View>
        </View>
    );
};
export default SearchMap;
