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
	input: {
		fontSize: 20,
		marginTop: 10,
		marginLeft: 20,
		marginRight: 20,
		borderBottomColor: '#696969',
		borderBottomWidth: 1,
	},
	button: {
		alignItems: 'center',
		marginTop: 30,
	},
	submit: {
		width: 170,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		flexDirection: 'row',
		backgroundColor: '#000',
		borderRadius: 30,
	},
	btnText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	},
});

export default styles;
