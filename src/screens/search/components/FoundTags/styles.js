import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import { scale, scaleHeight } from '../../../../utils';

const styles = StyleSheet.create({
    wrapper: {
        height: scaleHeight(377),
    },
    tagWrapper: {
        height: scaleHeight(55),
        marginTop: scaleHeight(15),
        marginRight: scale(25),
        justifyContent: 'space-between'
    },
    tagName: {
        fontSize: scaleHeight(16),
        color: '#030F09',
    },
    tagInfoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagInfo: {
        color: colors.text_title,
        fontSize: scaleHeight(14)
    },
    separatorPoint: {
        width: scale(4),
        height: scale(4),
        borderRadius: scale(4),
        backgroundColor: '#979797',
        marginHorizontal: scale(9),
    }
});

export default styles;
