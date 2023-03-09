import { StyleSheet, Platform } from 'react-native';
import colors from '../../constants/colors';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    input: {
        height: scaleHeight(41),
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        color: '#000000',
        paddingVertical: 0
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftTitle: {
        color: colors.text_content,
        fontSize: scaleHeight(14),
    },
    rightTitle: {
        color: colors.text_title,
        fontSize: scaleHeight(14),
    },
    errMsg: {
        color: 'red',
        marginTop: scaleHeight(5),
    }
});

export default styles;
