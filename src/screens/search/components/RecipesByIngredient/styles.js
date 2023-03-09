import { StyleSheet } from 'react-native';
import { scale, scaleHeight } from '../../../../utils';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    title: {
        marginTop: scaleHeight(15),
        marginBottom: scaleHeight(11),
    },
    ingredientName: {
        color: '#030F09',
        fontSize: scaleHeight(20),
        opacity: 0.3,
    },
    ingredientWrapper: {
        marginRight: scale(30),
    },
    scrollViewContainer: {
        paddingTop: scaleHeight(15),
    }
});

export default styles;
