import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import { scale, scaleHeight } from '../../../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    wrapper: {
        backgroundColor: 'white',
        borderRadius: scale(8),
        height: scale(475),
    },
    body: {
        flex: 1,
        paddingHorizontal: scale(35),
    },
    applyBtn: {
        marginBottom: scaleHeight(30),
    },
    serviceSlider: {
        marginTop: scaleHeight(18),
    },
    searchForWrapper: {
        flex: 1,
        marginVertical: scaleHeight(30),
    },
    searchForHeader: {
        marginTop: 0,
    },
    searchForItemWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    searchForItem: {
        paddingHorizontal: scale(15),
        paddingVertical: scaleHeight(4),
        borderRadius: scale(14.5),
        borderWidth: scaleHeight(1),
        borderColor: colors.primary_green,
        marginRight: scale(15),
        marginBottom: scale(14),
    },
    searchForItemTxt: {
        color: colors.primary_green,
        fontSize: scaleHeight(14),
    }
});

export default styles;
