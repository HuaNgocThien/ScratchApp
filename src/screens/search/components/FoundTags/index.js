import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import AreaHeader from '../AreaHeader';

const FoundTags = props => {
    const renderItem = (item) => {
        return (
            <View
                key={item}
                style={styles.tagWrapper}>
                <Text style={styles.tagName}>{item}</Text>
                <View style={styles.tagInfoWrapper}>
                    <Text style={styles.tagInfo}>45k followers</Text>
                    <View style={styles.separatorPoint} />
                    <Text style={styles.tagInfo}>7,345 Recipes</Text>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.wrapper}>
            <AreaHeader
                leftTitle={'Tags'}
                rightTitle={'show all (200+)'}
                haveRightTitle
            />
            {['#sweets', '#sweetsjam', '#sweetpancake', '#sweetbrunch'].map(renderItem)}
        </View>
    )
};

export default React.memo(FoundTags);