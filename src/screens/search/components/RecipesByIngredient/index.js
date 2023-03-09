/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import FoodCard from '../FoodCard';
import AreaHeader from '../AreaHeader';

const ingredient_list = ['Potato', 'Banana', 'Tomato', 'Sauce', 'Fish', 'Chicken', 'Crab', 'Eggs', 'Meat', 'Beef']
const RecipesByIngredient = props => {
    const [selectedItem, setSelectedItem] = useState(ingredient_list[0])
    const renderItem = ({ item, index }) => {
        return (
            <FoodCard />
        );
    }
    const renderIngredients = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.ingredientWrapper}
                onPress={() => setSelectedItem(item)}>
                <Text style={[
                    styles.ingredientName,
                    selectedItem == item ? { opacity: 1 } : {}
                ]}>{item}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.wrapper}>
            <AreaHeader
                leftTitle={'What can I make with..'}
                customStyle={styles.title}
            />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.7}
                data={ingredient_list}
                renderItem={renderIngredients}
                keyExtractor={(item) => item}
            />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.7}
                contentContainerStyle={styles.scrollViewContainer}
                data={['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'i1', 'j1']}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
        </View>
    )
};

export default React.memo(RecipesByIngredient);
