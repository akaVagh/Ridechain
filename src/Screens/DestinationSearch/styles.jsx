import { StyleSheet } from 'react-native';
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
        //TODO: Change height 160
        justifyContent: 'space-between',
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
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dbdbdb',
    },
    listText: {
        marginLeft: 10,
        padding: 5,
        fontSize: 18,
    },
    iconContainer: {
        marginLeft: 5,
        backgroundColor: '#b3b3b3',
        padding: 5,
        borderRadius: 25,
    },
    mapContainer: {
        height: '100%',
        backgroundColor: '#fff',
    },
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 24 : 0,
    },
});

export default styles;
