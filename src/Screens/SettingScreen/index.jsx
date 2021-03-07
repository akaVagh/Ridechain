import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Title } from 'react-native-paper';
import styles from './styles';

const SettingScreen = (props) => {
	return (
		<SafeAreaView>
			<StatusBar backgroundColor='#000' barStyle='light-content' />
			<View style={styles.userInfoSection}>
				<Text style={styles.title}>Edit Profile</Text>
			</View>
			<TouchableOpacity>
				<View style={styles.image}>
					<Avatar.Image
						source={require('../../assets/images/Image.jpg')}
						size={125}
					/>
				</View>
			</TouchableOpacity>
			<View style={styles.separator} />
			<View>
				<Text style={styles.heading}>First Name</Text>
				<Title style={styles.name}>Harsh</Title>
			</View>
			<View>
				<Text style={styles.heading}>Last Name</Text>
				<Title style={styles.name}>Vaghani</Title>
			</View>
			<View>
				<Text style={styles.heading}>Mobile Number</Text>
				<Title style={styles.name}>9913608014</Title>
			</View>
			<View>
				<Text style={styles.heading}>Email</Text>
				<Title style={styles.name}>harshvaghani00@gmail.com</Title>
			</View>
		</SafeAreaView>
	);
};
export default SettingScreen;
