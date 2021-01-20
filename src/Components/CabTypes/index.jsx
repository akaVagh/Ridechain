import React from 'react';
import { View, Text, Pressable } from 'react-native';
import CabTypeRow from '../CabTypeRow';
import typesData from '../../assets/data/types';

const CabTypes = (props) => {
    const confirm = () => {
        console.warn('confirm');
    };
    return (
        <View>
            {typesData.map((type) => (
                <CabTypeRow type={type} key={type.id} />
            ))}
            <Pressable
                onPress={confirm}
                style={{
                    padding: 10,
                    margin: 10,
                    backgroundColor: 'black',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{ fontWeight: 'bold', fontSize: 20, color: '#eee' }}
                >
                    Confirm Ride
                </Text>
            </Pressable>
        </View>
    );
};
export default CabTypes;
