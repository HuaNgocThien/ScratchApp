import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import {
    loginBg,
    scratchLogo
} from '../../../../assets/images';
const HeaderSection = ({
    title = '',
}) => {
    return <View style={styles.bgContainer}>
        <Image
            source={loginBg}
            style={styles.loginBg}
            resizeMode={'stretch'}
        />
        <Image
            source={scratchLogo}
            style={styles.logo}
        />
        <Text style={styles.welcomeTxt}>{title}</Text>
    </View>
};

export default HeaderSection;
