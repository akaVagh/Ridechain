import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const HomeSearch = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable
                style={styles.inputBox}
                onPress={() => navigation.navigate('Search Screen')}
            >
                {/* <View style={styles.inputBox}> */}
                <Text style={styles.inputText}> Where to? </Text>
                <View style={styles.timeConatiner}>
                    <AntDesign name='clockcircle' size={20} color='#545454' />
                    <Text>Now</Text>
                    <MaterialIcons
                        name='keyboard-arrow-down'
                        size={20}
                        color='black'
                    />
                </View>
                {/* </View> */}
            </Pressable>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name='clockcircle' size={24} color='#ffffff' />
                </View>
                <Text style={styles.desText}> Spin Nignt Club</Text>
            </View>

            <View style={styles.row}>
                <View
                    style={[
                        styles.iconContainer,
                        { backgroundColor: '#218cff' },
                    ]}
                >
                    <Entypo name='home' size={24} color='#ffffff' />
                </View>
                <Text style={styles.desText}> Spin Nignt Club</Text>
            </View>
        </View>
    );
};
export default HomeSearch;
