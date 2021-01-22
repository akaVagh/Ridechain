import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
} from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../../Components/Context';
import { useNavigation } from '@react-navigation/native';

import Users from '../../assets/data/users';

const SignInScreen = ({ navigation }) => {
    const [data, setData] = useState({
        mob_no: '',
        passwd: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if (val.length === 10) {
            setData({
                ...data,
                mob_no: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                mob_no: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    };

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                passwd: val,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                passwd: val,
                isValidPassword: false,
            });
        }
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    const handleValidNumber = (val) => {
        if (val.length == 4) {
            setData({
                ...data,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                isValidUser: false,
            });
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>

            <Animatable.View animation='fadeInUpBig' style={styles.footer}>
                <Text style={styles.text_footer}>Mobile No.</Text>
                <View style={styles.action}>
                    <Feather name='smartphone' size={20} color='black' />
                    <TextInput
                        placeholder='Your Mobile No.'
                        placeholderTextColor='#777'
                        style={[
                            styles.textInput,
                            {
                                color: '#000',
                            },
                        ]}
                        // autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                        // onEndEditing={(e) =>
                        //     handleValidNumber(e.nativeEvent.text)
                        // }
                    />
                    {data.check_textInputChange ? (
                        <Animatable.View animation='bounceIn'>
                            <Feather
                                name='check-circle'
                                size={20}
                                color='green'
                            />
                        </Animatable.View>
                    ) : null}
                </View>
                <Text
                    style={[
                        styles.text_footer,
                        {
                            color: '#000',
                            marginTop: 35,
                        },
                    ]}
                >
                    Password
                </Text>

                <View style={styles.action}>
                    <Feather name='lock' size={20} color='#000' />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        placeholderTextColor='#777'
                        style={[
                            styles.textInput,
                            {
                                color: '#000',
                            },
                        ]}
                        // autoCapitalize='none'
                        // onChangeText={(val) => textInputChange(val)}
                        // onEndEditing={(e) =>
                        //     handleValidNumber(e.nativeEvent.text)
                        // }
                    />
                    {data.isValidUser ? null : (
                        <Animatable.View animation='fadeInLeft' duration={500}>
                            <Text style={styles.errorMsg}>
                                Enter 10 digit mobile number.
                            </Text>
                        </Animatable.View>
                    )}
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                            <Feather name='eye-off' color='grey' size={20} />
                        ) : (
                            <Feather name='eye' color='grey' size={20} />
                        )}
                    </TouchableOpacity>
                </View>

                {data.isValidPassword ? null : (
                    <Animatable.View animation='fadeInLeft' duration={500}>
                        <Text style={styles.errorMsg}>
                            Password must be 8 characters long.
                        </Text>
                    </Animatable.View>
                )}

                <TouchableOpacity>
                    <Text
                        style={{
                            color: '#000',
                            marginTop: 15,
                            fontWeight: '800',
                        }}
                    >
                        Forgot password?
                    </Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={[
                            styles.signIn,
                            {
                                borderColor: '#000',
                                borderWidth: 1,
                                marginTop: 15,
                                backgroundColor: '#000',
                            },
                        ]}
                        onPress={() => {
                            loginHandle(data.username, data.password);
                        }}
                    >
                        <Text
                            style={[
                                styles.textSign,
                                {
                                    color: '#fff',
                                },
                            ]}
                        >
                            Sign In
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={[
                            styles.signIn,
                            {
                                borderColor: '#000',
                                borderWidth: 1,
                                marginTop: 15,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.textSign,
                                {
                                    color: '#000',
                                },
                            ]}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;
