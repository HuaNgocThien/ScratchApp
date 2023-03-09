/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import FoodCard from '../FoodCard';
import AreaHeader from '../AreaHeader';

const TrendingRecipes = props => {
  const renderItem = ({ item, index }) => {
    return (
      <FoodCard />
    );
  }
  return (
    <View style={styles.wrapper}>
      <AreaHeader
        leftTitle='Trending Recipes'
        customStyle={styles.title}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.7}
        contentContainerStyle={styles.scrollViewContainer}
        data={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  )
};

export default React.memo(TrendingRecipes);
