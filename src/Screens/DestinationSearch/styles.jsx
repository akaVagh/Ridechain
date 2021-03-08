import { Dimensions, Platform, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	container: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 5,
		flexDirection: 'column',
		padding: 10,
		backgroundColor: '#fff',
		height: 160,
		justifyContent: 'space-between',
		//position: 'absolute',
	},
	inpTxt: {
		padding: 10,
		height: 38,
		backgroundColor: '#eee',
		marginVertical: 10,
		marginLeft: 30,
		marginRight: 10,
	},
	listContainer: {
		// position: 'absolute',
		flexDirection: 'row',
		//padding: 5,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#dbdbdb',
	},
	hideList: {
		alignItems: 'center',
		backgroundColor: '#eeeeee',
	},
	listNames: {
		flexDirection: 'column',
		padding: 5,
	},
	primaryText: {
		fontSize: 15,
		marginLeft: 10,
		padding: 5,
		fontWeight: '600',
	},
	secondaryText: {
		marginLeft: 10,
		padding: 5,
		fontSize: 13,
		color: '#666',
	},
	iconContainer: {
		marginLeft: 20,
		backgroundColor: '#b3b3b3',
		padding: 5,
		borderRadius: 25,
	},
	listWindow: {
		height: '100%',
		backgroundColor: '#fff',
	},
	mapContainer: {
		marginBottom: 300,
	},
	buttonContainer: {
		position: 'absolute',
		top: 600,
		width: '100%',
		padding: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: '60%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		borderColor: '#000',
		borderWidth: 1,
		marginTop: 15,
		backgroundColor: '#000',
	},
	droidSafeArea: {
		paddingTop: Platform.OS === 'android' ? 24 : 0,
	},
});

export default styles;
