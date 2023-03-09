import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    lineSeparator: {
        backgroundColor: '#E6E6E6',
        height: 1,
        marginHorizontal: scale(25),
    },
});

export default styles;
