import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ActivityIndicator,
	LogBox,
	BackHandler,
} from 'react-native';

import Drawer from './src/Navigation/DrawerScreen';
import RootStack from './src/Navigation/RootStack';
import firebase from 'firebase';
import { firebaseConfig } from './src/Components/firebase/config';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import _ from 'lodash';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = (message) => {
	if (message.indexOf('Setting a timer') <= -1) {
		_console.warn(message);
	}
};
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}
export default function App() {
	useEffect(() => {
		const backAction = () => {
			BackHandler.addEventListener('hardwareBackPress', () => {
				navigation.navigate('Home Screen');
			});
		};

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		);

		return () => backHandler.remove();
	}, []);
	const [user, setuser] = useState(false);
	const [uid, setuid] = useState();

	const checkIfLoggedIn = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setuser(true);
				setuid(user.uid);
			} else {
				setuser(false);
			}
		});
	};
	useEffect(() => {
		checkIfLoggedIn();
	});

	return (
		<Provider store={store}>
			<>
				<SafeAreaView style={styles.droidSafeArea}>
					<StatusBar
						style='auto'
						translucent={true}
						backgroundColor={'transparent'}
					/>
					{user ? <Drawer uid={uid} /> : <RootStack />}
				</SafeAreaView>
			</>
		</Provider>
	);
}

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 24 : 0,
	},
});
