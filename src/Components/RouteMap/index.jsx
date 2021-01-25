import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import DestinationSearch from '../../Screens/DestinationSearch';

const RouteMap = (props) => {
    const GOOGLE_MAPS_APIKEY = 'AIzaSyAFcNY6a_668CtawRFZsw4xizaTX2ttt0Q';
    const origin = {
        latitude: props.origin.lat,
        longitude: props.origin.lng,
    };
    const destination = {
        latitude: props.destination.lat,
        longitude: props.destination.lng,
    };
    console.log('route::', props);
    return (
        <MapView
            style={{ width: '100%', height: '100%' }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={require('../../assets/mapStyle.json')}
            initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
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
            <Marker
                coordinate={{
                    latitude: props.origin.lat,
                    longitude: props.origin.lng,
                }}
                title={'Origin'}
            />
            <Marker
                coordinate={{
                    latitude: props.destination.lat,
                    longitude: props.destination.lng,
                }}
                title={'Destination'}
            />
        </MapView>
    );
};
export default RouteMap;
