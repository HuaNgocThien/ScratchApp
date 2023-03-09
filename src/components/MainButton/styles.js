import { StyleSheet, Platform } from 'react-native';
import colors from '../../constants/colors';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    btnWrapper: {
        backgroundColor: colors.primary_green,
        height: scaleHeight(50),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(8),
    },
    title: {
        color: colors.white,
        fontSize: scaleHeight(16)
    }
});

export default styles;
