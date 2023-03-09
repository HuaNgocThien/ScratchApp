import { StyleSheet, Platform } from 'react-native';
import colors from '../../constants/colors';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: scale(20),
        paddingRight: scale(30),
        paddingTop: scaleHeight(13),
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    backIcon: {
        width: scale(20),
        height: scale(20),
    },
    leftTitle: {
        color: '#767676',
        fontSize: scale(12),
        marginLeft: scale(12.5),
    },
    rightIcon: {
        width: scale(24),
        height: scale(24),
        tintColor: colors.black,
    }
});

export default styles;
