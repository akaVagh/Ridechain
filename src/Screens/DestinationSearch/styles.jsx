import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor: '#001010',
        height: '100%',
    },
    inpTxt: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
    },
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 24 : 0,
    },
});

export default styles;
