import React from 'react';
import { View, Dimensions } from 'react-native';
import CovidMessage from '../../Components/CovidMessage';
import HomeMap from '../../Components/HomeMap';
import HomeSearch from '../../Components/HomeSearch';
const HomeScreen = (props) => {
    return (
        <View>
            <View style={{ height: Dimensions.get('window').height - 360 }}>
                <HomeMap />
            </View>
            <View>
                <CovidMessage />
            </View>
            <View>
                <HomeSearch />
            </View>
        </View>
    );
};
export default HomeScreen;
