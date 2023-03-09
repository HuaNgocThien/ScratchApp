import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const MainButton = ({
    onPress,
    customStyle,
    title = '',
}) => {
    const onBtnPress = () => {
        onPress && onPress()
    }
    return (
        <TouchableOpacity 
        onPress={onBtnPress}
        activeOpacity={0.85}
        style={[styles.btnWrapper, customStyle]}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}
export default React.memo(MainButton);