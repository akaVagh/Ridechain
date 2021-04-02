import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	remainingTime: {
		fontSize: 46,
	},
	timeContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textFont: {
		color: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 30,
		margin: 30,
	},
	cancelBtn: {
		padding: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
		margin: 30,
		width: 200,
		borderRadius: 100,
	},
});

export default styles;
