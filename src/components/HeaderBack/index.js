import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';
import {
    backIcon,
} from '../../assets/images'

const HeaderBack = ({
    onLeftTitlePress,
    leftTitle = '',
    rightIcon,
}) => {
    return (
        <View style={styles.headerWrapper}>
            <TouchableOpacity
                onPress={() => onLeftTitlePress?.()}
                style={styles.leftWrapper}>
                <Image
                    source={backIcon}
                    style={styles.backIcon}
                />
                <Text style={styles.leftTitle}>{leftTitle}</Text>
            </TouchableOpacity>
            {rightIcon?.()}
        </View>
    );
}
export default React.memo(HeaderBack);