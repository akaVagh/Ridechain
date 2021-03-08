import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ActivityIndicator,
} from 'react-native';

import Drawer from './src/Navigation/DrawerScreen';
import RootStack from './src/Navigation/RootStack';
import firebase from 'firebase';
import { firebaseConfig } from './src/Components/firebase/config';
import { Provider } from 'react-redux';
import store from './src/redux/store';

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}
export default function App() {
	const [user, setuser] = useState(false);
	const checkIfLoggedIn = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setuser(true);
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
					{user ? <Drawer /> : <RootStack />}
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
