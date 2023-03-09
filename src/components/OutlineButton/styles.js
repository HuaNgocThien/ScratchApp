import { StyleSheet, Platform } from 'react-native';
import colors from '../../constants/colors';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    btnWrapper: {
        paddingVertical: scaleHeight(8),
        paddingHorizontal: scale(12),
        borderRadius: scale(4),
        borderWidth: scale(1),
        borderColor: colors.primary_green,
        flexDirection:'row',
        alignItems:'center'
    },
    btnTitle: {
        color: colors.primary_green,
        fontSize: scaleHeight(14)
    }
});

export default styles;
