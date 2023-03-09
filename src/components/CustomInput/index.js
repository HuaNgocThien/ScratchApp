import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const CustomInput = ({
    leftTitle = '',
    isRightTitle = false,
    rightTitle = '',
    value = null,
    customStyle,
    numberOfLines = 1,
    placeholder = '',
    showErrMsg = false,
    keyboardType = 'default',
    secureTextEntry = false,
}) => {
    return (
        <View style={customStyle}>
            <View style={styles.titleWrapper}>
                <Text style={styles.leftTitle}>{leftTitle}</Text>
                {isRightTitle && <TouchableOpacity>
                    <Text style={styles.rightTitle}>{rightTitle}</Text>
                </TouchableOpacity>}
            </View>
            <TextInput
                style={styles.input}
                numberOfLines={numberOfLines}
                placeholder={placeholder}
                value={value.value}
                onChangeText={value.onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
            <Text style={styles.errMsg}>{showErrMsg ? value.errMsg : ''}</Text>
        </View>
    );
}
export default React.memo(CustomInput);