import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-number-input';

const SignInScreen = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const phoneInput = useRef();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>

            <Animatable.View animation='fadeInUpBig' style={styles.footer}>
                <Text style={styles.text_footer}>Enter your mobile number</Text>
                <View style={styles.action}>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode='IN'
                        layout='first'
                        //onChangeText={(val) => textInputChange(val)}
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        withDarkTheme
                        containerStyle={[
                            styles.textInput,
                            {
                                color: '#000',
                            },
                        ]}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={styles.signIn}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={[
                                    styles.textSign,
                                    {
                                        color: '#007efd',
                                    },
                                ]}
                            >
                                or connect with Social
                            </Text>
                            <AntDesign
                                name='arrowright'
                                size={24}
                                color='#007efd'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
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
                        onPress={() => {}}
                    >
                        <Text
                            style={[
                                styles.textSign,
                                {
                                    color: '#fff',
                                },
                            ]}
                        >
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;
