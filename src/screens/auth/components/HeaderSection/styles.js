import { StyleSheet, Platform } from 'react-native';
import { scale, scaleHeight } from '../../../../utils';

const styles = StyleSheet.create({
    bgContainer: {
        width: '100%',
        justifyContent: 'center'
    },
    loginBg: {
        width: '100%'
    },
    logo: {
        position: 'absolute',
        marginHorizontal: scale(25),
        top: Platform.OS == 'ios' ? scaleHeight(64) : scaleHeight(24),
    },
    welcomeTxt: {
        color: '#030F09',
        fontSize: scaleHeight(24),
        position: 'absolute',
        marginHorizontal: scale(25),
    },
});

export default styles;
