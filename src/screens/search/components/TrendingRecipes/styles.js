import { StyleSheet } from 'react-native';
import { scale, scaleHeight } from '../../../../utils';

const styles = StyleSheet.create({
    wrapper: {
        height: scaleHeight(316)
    },
    title: {
        marginTop: scaleHeight(30),
        marginBottom: scaleHeight(20),
    },
});

export default styles;
