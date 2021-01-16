import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>
                Laboris nulla non amet eiusmod sit dolore commodo aute dolor
                consequat adipisicing tempor. Et enim adipisicing enim ea
                excepteur anim. Ut cillum officia tempor non labore. Sit sit ut
                consequat id cillum qui enim. Laboris aliquip veniam enim irure
                dolor elit.
            </Text>
            <Text style={styles.lernmore}>Learn More</Text>
        </View>
    );
};
export default CovidMessage;
