import React from 'react';
import { View, Dimensions } from 'react-native';
import CabTypes from '../../Components/CabTypes';
import RouteMap from '../../Components/RouteMap';

const SearchResults = (props) => {
    //const origin = props.route.params;
    return (
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
            <View style={{ height: Dimensions.get('window').height - 400 }}>
                <RouteMap
                    origin={props.route.params.originPlace}
                    destination={props.route.params.destinationPlace}
                />
            </View>
            <View style={{ height: 400 }}>
                <CabTypes />
            </View>
        </View>
    );
};
export default SearchResults;
