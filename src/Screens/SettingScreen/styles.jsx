import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	image: {
		flexDirection: 'column',
		marginTop: 15,
		marginLeft: 20,
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: '#8a8a8a',
		margin: 10,
	},
	userInfoSection: {
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
		height: 75,
	},
	title: {
		fontSize: 35,
		marginLeft: 20,
		fontWeight: '300',
		color: '#fff',
	},
	heading: {
		fontSize: 18,
		marginLeft: 20,
		marginTop: 10,
		fontWeight: '400',
		color: '#7b7b7b',
	},
	name: {
		fontSize: 20,
		marginLeft: 20,
		marginTop: 10,
		marginBottom: 20,
		fontWeight: '400',
		color: '#000',
	},
});

export default styles;
