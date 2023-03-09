import { StyleSheet } from 'react-native';
import { scale, scaleHeight } from '../../../../utils';

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        paddingTop: scale(30),
        paddingHorizontal: scale(30),
        justifyContent: 'space-between',
    },
    rightWrapper: {
        width: '25%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center'
    },
    icon: {
        width: scale(24),
        height: scale(24)
    }
});

export default styles;
