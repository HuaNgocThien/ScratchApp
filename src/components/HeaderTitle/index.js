import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const HeaderTitle = ({
    onRightTitlePress,
    leftTitle = '',
    rightTitle = '',
    hasRightTitle = false,
    rightTitleIcon,
}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.leftTitle}>{leftTitle}</Text>
            {hasRightTitle && <TouchableOpacity
                onPress={() => onRightTitlePress?.()}
                style={styles.rightTitle}>
                {rightTitleIcon?.()}
                <Text style={styles.rightTitleTxt}>{rightTitle}</Text>
            </TouchableOpacity>}
        </View>
    );
}
export default React.memo(HeaderTitle);