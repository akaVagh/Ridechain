import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import CovidMessage from '../../Components/CovidMessage';
import HomeMap from '../../Components/HomeMap';
import HomeSearch from '../../Components/HomeSearch';
const HomeScreen = (props) => {
    return (
        <View>
            <View style={{ height: Dimensions.get('window').height - 425 }}>
                <HomeMap />
            </View>
            <CovidMessage />
            <HomeSearch />
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({});
