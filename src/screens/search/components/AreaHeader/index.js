/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const AreaHeader = ({
    leftTitle = '',
    haveRightTitle = false,
    rightTitle = '',
    customStyle = {},
}) => {
    return (
        <View style={[styles.header, customStyle]}>
            <Text style={styles.title}>{leftTitle}</Text>
            {haveRightTitle && <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.showAll}>{rightTitle}</Text>
            </TouchableOpacity>}
        </View>
    )
};

export default React.memo(AreaHeader);
