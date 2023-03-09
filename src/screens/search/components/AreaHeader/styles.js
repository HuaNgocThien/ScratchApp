import { StyleSheet } from 'react-native';
import { scale, scaleHeight } from '../../../../utils';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
    title: {
        color: '#030F09',
        fontSize: scaleHeight(16),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaleHeight(24),
        marginBottom: scaleHeight(15),
        marginRight: scale(25)
    },
    showAll: {
        color: colors.primary_green,
        fontSize: scaleHeight(16),
    },
});

export default styles;
