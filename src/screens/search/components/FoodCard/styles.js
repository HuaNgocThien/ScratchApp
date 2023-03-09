import { StyleSheet } from 'react-native';
import { scale, scaleHeight } from '../../../../utils';

const styles = StyleSheet.create({
    itemWrapper: {
        height: scaleHeight(216),
        width: scale(120),
        marginRight: scale(15)
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    img: {
        height: scaleHeight(140),
        width: '100%',
    },
    name: {
        color: '#030F09',
        fontSize: scaleHeight(16),
        marginTop: scaleHeight(10)
    }
});

export default styles;
