import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = (props) => {
    const GOOGLE_MAPS_APIKEY = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';
    const origin = {
        latitude: 21.225296,
        longitude: 72.892987,
    };
    const destination = {
        latitude: 21.222576,
        longitude: 72.837412,
    };
    return (
        <MapView
            style={{ width: '100%', height: '100%' }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={require('../../assets/mapStyle.json')}
            initialRegion={{
                latitude: 21.225296,
                longitude: 72.892987,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q'}
                strokeWidth={5}
                strokeColor='black'
            />
            <Marker coordinate={origin} title={'Origin'} />
            <Marker coordinate={destination} title={'Destination'} />
        </MapView>
    );
};
export default RouteMap;
