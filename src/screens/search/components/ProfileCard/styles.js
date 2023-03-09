import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
import { scaleHeight, scale } from '../../../../utils';

const styles = StyleSheet.create({
    profileWrapper: {
        backgroundColor: colors.white,
        width: scale(172),
        height: scaleHeight(231),
        marginRight: scale(15),
        overflow: 'hidden',
        borderRadius: scale(8),
        alignItems: 'center'
    },
    coverImg: {
        height: scaleHeight(110),
        width: '100%',
        opacity: 0.7,
    },
    userAva: {
        width: scale(80),
        height: scale(80),
        borderRadius: scale(80),
    },
    userAvaWrapper: {
        width: scale(85),
        height: scale(85),
        borderRadius: scale(85),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'gray',
        elevation: scale(5),
        position: 'absolute',
        top: scaleHeight(55),
    },
    userInfo: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    userName: {
        color: '#030F09',
        fontSize: scaleHeight(16),
        marginTop: scaleHeight(40),
    },
    userOtherInfo: {
        flexDirection: 'row',
        height: scaleHeight(59),
        width: '100%',
    },
    infoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: '#030F09',
        fontSize: scaleHeight(14)
    },
    infoName:{
        color: '#030F09',
        fontSize: scaleHeight(10),
        opacity: 0.6,
    }
});

export default styles;
