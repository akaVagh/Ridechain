import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import {
	useTheme,
	Avatar,
	Title,
	Caption,
	Paragraph,
	Drawer,
	Text,
	TouchableRipple,
	Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import firebase from 'firebase';

const DrawerContent = (props) => {
	const paperTheme = useTheme();

	//  const { signOut, toggleTheme } = React.useContext(AuthContext);

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={styles.image}>
							<Avatar.Image
								source={require('../../assets/images/Image.jpg')}
								size={125}
							/>
						</View>
						<View>
							<View
								style={{
									marginLeft: 15,
									flexDirection: 'column',
								}}
							>
								<Title style={styles.title}>
									Harsh Vaghani
								</Title>
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name='home-outline'
									color={color}
									size={size}
								/>
							)}
							label='Home'
							onPress={() => {
								props.navigation.navigate('Home Screen');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name='account-outline'
									color={color}
									size={size}
								/>
							)}
							label='Profile'
							onPress={() => {
								props.navigation.navigate('Profile');
							}}
						/>

						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name='settings-outline'
									color={color}
									size={size}
								/>
							)}
							label='Settings'
							onPress={() => {
								props.navigation.navigate('Setting');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name='account-check-outline'
									color={color}
									size={size}
								/>
							)}
							label='Support'
							onPress={() => {
								props.navigation.navigate('SupportScreen');
							}}
						/>
					</Drawer.Section>
					{/* <Drawer.Section title='Preferences'>
                        <TouchableRipple
                            onPress={() => {
                                toggleTheme();
                            }}
                        >
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents='none'>
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
				</View>
			</DrawerContentScrollView>

			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => (
						<Icon name='exit-to-app' color={color} size={size} />
					)}
					label='Sign Out'
					onPress={() => {
						firebase.auth().signOut();
					}}
				/>
			</Drawer.Section>
		</View>
	);
};
export default DrawerContent;
