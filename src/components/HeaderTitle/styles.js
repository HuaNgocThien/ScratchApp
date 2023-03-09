import { StyleSheet, Platform } from 'react-native';
import colors from '../../constants/colors';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    wrapper: {
        marginTop: scaleHeight(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: scale(25),
        paddingRight: scale(13),
        alignItems: 'center',
    },
    leftTitle: {
        color: '#030F09',
        fontSize: scaleHeight(24),
    },
    rightTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightTitleTxt: {
        color: colors.primary_green,
        fontSize: scaleHeight(16),
        marginLeft: scale(9),
    },
});

export default styles;
