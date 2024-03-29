import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useTheme, Avatar, Title, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';
const DrawerContent = (props) => {
	const userData = useSelector((state) => state.user.userData);

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={styles.image}>
							<Avatar.Image
								source={{
									uri: userData
										? userData.imgUrl
										: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
								}}
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
									{userData.first_name} {userData.last_name}
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
								<Icon name='car' color={color} size={size} />
							)}
							label='Ride'
							onPress={() => {
								props.navigation.navigate('Ride Screen');
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
