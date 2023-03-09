import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    wrapper: {
        height: scaleHeight(45),
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftTitle: {
        color: '#030F09',
        fontSize: scaleHeight(14)
    },
    rightTitle: {
        fontSize: scaleHeight(14),
        color: colors.text_content
    },
    slider: {
        height: scaleHeight(16),
        justifyContent: 'center'
    },
    thump: {
        backgroundColor: colors.primary_green,
        width: scaleHeight(16),
        height: scaleHeight(16),
        borderRadius: scaleHeight(16),
    },
    rail: {
        height: scaleHeight(4),
        backgroundColor: '#E6E6E6',
        flex: 1,
    },
    railSelected: {
        height: scaleHeight(4),
        backgroundColor: colors.primary_green,
    }
});

export default styles;
