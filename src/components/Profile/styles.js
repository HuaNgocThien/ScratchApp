import { StyleSheet, Platform } from 'react-native';
import { scale, scaleHeight } from '../../utils';

const styles = StyleSheet.create({
    wrapper:{
        height: scale(137),
        paddingHorizontal: scale(25),
    },
    infoWrapper: {
        paddingTop: scale(30),
        paddingBottom: scaleHeight(15),
        flexDirection: 'row',
    },
    otherWrapper:{
        height: scale(194),
    },
    userAvatar: {
        width: scale(82),
        height: scale(82),
        borderRadius: scale(82),
    },
    detailView: {
        flex: 1,
        paddingLeft: scale(15),
        paddingTop: scaleHeight(5),
    },
    editBtn: {
        width: scale(24),
        height: scale(24)
    },
    userName: {
        color: '#030F09',
        fontSize: scaleHeight(16),
    },
    infoText: {
        color: '#606060',
        fontSize: scaleHeight(14),
    },
    otherInfoWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    separatorPoint: {
        width: scale(4),
        height: scale(4),
        borderRadius: scale(4),
        backgroundColor: '#979797',
        marginHorizontal: scale(10),
    },
});

export default styles;
