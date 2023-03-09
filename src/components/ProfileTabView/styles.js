import { StyleSheet, Platform } from 'react-native';
import colors from '../../constants/colors';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    tabWrapper: {
        flex: 1,
        alignItems: 'center',
        paddingTop: scaleHeight(25),
    },
    tabBarWrapper: {
        flexDirection: 'row',
        height: scaleHeight(93),
    },
    tabTitleTxt: {
        color: '#030F09',
        fontSize: scaleHeight(16),
        paddingTop: scaleHeight(5),
    },
    tabTitleNumber: {
        color: '#030F09',
        fontSize: scaleHeight(16),
    },
    activeTab: {
        backgroundColor: colors.primary_green,
        height: scaleHeight(4),
        width: scale(84),
        borderTopRightRadius: scale(10),
        borderTopLeftRadius: scale(10),
        position: 'absolute',
        bottom: 0,
    },
    recipeWrapper: {
        width: scale(155),
        height: scaleHeight(132),
        backgroundColor: colors.white,
        borderRadius: scale(8),
        marginBottom: scaleHeight(15),
        overflow: 'hidden',
        elevation: scaleHeight(10),
        shadowColor: 'gray',
    },
    columnWrapper: {
        justifyContent: 'space-between'
    },
    contentContainer: {
        paddingHorizontal: scale(25),
        paddingTop: scale(25),
    },
    feedImg: {
        width: '100%',
        height: scaleHeight(100),
    },
    feedName: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: scaleHeight(16),
        color: '#030F09',
        flex: 1,
    },
    lineSeparator: {
        backgroundColor: '#E6E6E6',
        height: 1,
        marginHorizontal: scale(25),
    },
});

export default styles;
