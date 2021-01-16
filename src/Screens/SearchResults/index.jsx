import React from 'react';
import { View, Dimensions } from 'react-native';
import CabTypes from '../../Components/CabTypes';
import RouteMap from '../../Components/RouteMap';

const SearchResults = (props) => {
    return (
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
            <View style={{ height: Dimensions.get('window').height - 400 }}>
                <RouteMap />
            </View>
            <View style={{ height: 400 }}>
                <CabTypes />
            </View>
        </View>
    );
};
export default SearchResults;
