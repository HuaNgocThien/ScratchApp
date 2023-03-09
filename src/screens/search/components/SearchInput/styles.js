import { StyleSheet } from 'react-native';
import { scale, scaleHeight } from '../../../../utils';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
    searchWrapper: {
        backgroundColor: colors.white,
        height: scaleHeight(46),
        borderRadius: scale(8),
        shadowColor: 'gray',
        elevation: scale(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lrWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: scale(30),
        height: scale(30),
    },
    input: {
        flex: 5,
        color:colors.black
    },
});

export default styles;
