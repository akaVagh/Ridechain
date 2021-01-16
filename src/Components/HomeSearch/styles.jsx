import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e4e4e4',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: { fontSize: 20, fontWeight: '700', color: '#6e6e6e' },
    timeConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dbdbdb',
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
    },
    desText: { marginLeft: 10, fontWeight: '600', fontSize: 20 },
});

export default styles;
