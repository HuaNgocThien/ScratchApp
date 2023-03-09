import { StyleSheet } from 'react-native';
import { scale, scaleHeight } from '../../../../utils';
import color from '../../../../constants/colors';

const styles = StyleSheet.create({
    feedContainer: {
        backgroundColor: color.white,
        height: scaleHeight(556),
        width: scale(295),
        borderRadius: scale(8),
        overflow: 'hidden',
        marginHorizontal: scale(10),
    },
    feedHeaderWrapper: {
        height: scaleHeight(62),
        alignItems: 'flex-start',
        paddingHorizontal: scale(15),
        position:'absolute',
        zIndex: 1,
        backgroundColor: color.white,
        width:'100%'
    },
    feedHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAva: {
        borderRadius: scaleHeight(32),
        width: scaleHeight(32),
        height: scaleHeight(32),
    },
    userInfo: {
        height: '100%',
        paddingLeft: scale(10),
        justifyContent: 'center'
    },
    userName: {
        color: '#030F09',
        fontSize: scaleHeight(12),
    },
    userOnlTime: {
        color: '#767676',
        fontSize: scaleHeight(12),
    },
    feedImg: {
        width: '100%',
        height: scaleHeight(396),
    },
    feedTitleWrapper: {
        flexDirection: 'row',
        paddingHorizontal: scale(15),
        height: scaleHeight(32),
        marginTop: scaleHeight(15),
        marginBottom: scaleHeight(10),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    feedTitle: {
        color: '#030F09',
        fontSize: scaleHeight(18),
        flex: 1,
    },
    feedDescription: {
        marginHorizontal: scale(15),
        color: color.text_content,
    },
    footerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(15),
        justifyContent:'space-between',
        flex: 1
    },
    dot: {
        width: scaleHeight(4),
        height: scaleHeight(4),
        borderRadius: scaleHeight(4),
        marginHorizontal: scale(10),
        backgroundColor:'#979797'
    },
    likeTxt: {
        color: color.text_title,
        fontSize: scaleHeight(14),
    },
    btnIcon: {
        marginRight: scale(10)
    },
    feedInfo: {
        flexDirection:'row',
        alignItems:'center'
    },
    firstItem:{
        marginLeft: scale(40)
    },
    feedView: {
        flex: 1,
    }
});

export default styles;
