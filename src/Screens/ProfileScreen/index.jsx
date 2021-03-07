import * as firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native-gesture-handler';
import { Avatar, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import styles from './styles';

const ProfileScreen = (props) => {
	const uid = useSelector((state) => state.user.uid.uid);

	const dispatch = useDispatch();
	console.log('uid', uid);
	const [profile, setprofile] = useState({
		fname: '',
		lname: '',
		mobileNo: '',
		email: '',
	});
	const [userData, setuserData] = useState(null);
	const getUser = async () => {
		const currentUser = await firebase
			.firestore()
			.collection('riders')
			.doc(uid)
			.get()
			.then((userSnapshot) => {
				if (userSnapshot.exists) {
					setuserData(userSnapshot.data());
				}
			});
	};
	console.log('userData--', userData);
	useEffect(() => {
		getUser();
	}, []);
	return (
		<SafeAreaView>
			<ScrollView>
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
					<TextInput
						style={styles.input}
						value={userData ? userData.first_name : ''}
						onChangeText={(fname) =>
							setprofile({ ...profile, fname })
						}
					/>
				</View>
				<View>
					<Text style={styles.heading}>Last Name</Text>
					<TextInput
						style={styles.input}
						value={userData ? userData.last_name : ''}
						onChangeText={(lname) =>
							setprofile({ ...profile, lname })
						}
					/>
				</View>
				<View>
					<Text style={styles.heading}>Mobile Number</Text>
					<TextInput
						style={styles.input}
						value={userData ? userData.mobileNo : ''}
						onChangeText={(mobileNo) =>
							setprofile({ ...profile, mobileNo })
						}
					/>
				</View>
				<View>
					<Text style={styles.heading}>Email</Text>
					<TextInput
						style={styles.input}
						value={userData ? userData.email : ''}
						onChangeText={(email) =>
							setprofile({ ...profile, email })
						}
					/>
				</View>

				<TouchableOpacity onPress={() => {}} style={styles.button}>
					<View style={styles.submit}>
						<Text style={styles.btnText}>Update</Text>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};
export default ProfileScreen;
