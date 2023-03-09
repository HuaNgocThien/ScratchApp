/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import FoodCard from '../FoodCard';
import AreaHeader from '../AreaHeader';

const FoundRecipes = props => {
    const renderItem = ({ item, index }) => {
        return (
            <FoodCard />
        );
    }
    return (
        <View style={styles.wrapper}>
            <AreaHeader
                leftTitle={'Recipes'}
                rightTitle={'show all (200+)'}
                haveRightTitle
            />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.7}
                data={['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'i1', 'j1']}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
        </View>
    )
};

export default React.memo(FoundRecipes);
