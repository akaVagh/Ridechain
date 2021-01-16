import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
    },
    image: {
        height: 80,
        width: 90,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    cabtype: { fontWeight: 'bold', fontSize: 18, marginBottom: 5 },
    time: {
        color: '#636363',
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    price: { fontSize: 18, fontWeight: 'bold', marginLeft: 5 },
});

export default styles;
