/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import FeedCard from '../FeedCard';
import { scale } from '../../../../utils';

const PAGE_SIZE = scale(315)

const ListSection = props => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const renderItem = ({ item, index }) => {
        return (
            <View style={index != selectedIndex ? { opacity: 0.6 } : {}}>
                <FeedCard index={index} />
            </View>
        );
    }
    const onScrollEnd = (e) => {
        let contentOffset = e.nativeEvent.contentOffset;
        let pageNum = Math.round(contentOffset.x / PAGE_SIZE);
        setSelectedIndex(pageNum)
    }
    return (
        <View style={styles.body}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.7}
                disableIntervalMomentum
                snapToInterval={PAGE_SIZE}
                onMomentumScrollEnd={onScrollEnd}
                contentContainerStyle={styles.scrollViewContainer}
                data={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

export default ListSection;
