import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>
                {'\u2023 '}Please wear mask if you want to use our service!{' '}
                {'\n'}
                {'\u2023 '}Clean your hands often.
            </Text>
            <Text style={styles.lernmore}>Learn More</Text>
        </View>
    );
};
export default CovidMessage;
