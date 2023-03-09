/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import {
    scratchLogo,
    iconMessages,
    iconNoti,
} from '../../../../assets/images';

const HeaderSection = props => {
    return <View style={styles.headerWrapper}>
        <Image
            source={scratchLogo}
        />
        <View style={styles.rightWrapper}>
            <TouchableOpacity>
                <Image
                    source={iconNoti}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={iconMessages}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    </View>
};

export default HeaderSection;
