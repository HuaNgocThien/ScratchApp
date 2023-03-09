import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const OutlineButton = ({
    onPress,
    customStyle,
    title = '',
    isLeftIcon = false,
    leftIcon,
}) => {
    const onBtnPress = () => {
        onPress && onPress()
    }
    return (
        <TouchableOpacity
            onPress={onBtnPress}
            style={[styles.btnWrapper, customStyle]}>
            {isLeftIcon && leftIcon()}
            <Text style={styles.btnTitle}>{title}</Text>
        </TouchableOpacity>
    );
}
export default React.memo(OutlineButton);