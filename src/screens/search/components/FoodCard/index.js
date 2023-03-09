/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import {
    feedImg
} from '../../../../assets/images';

const FoodCard = props => {
    return (
        <View style={styles.itemWrapper}>
          <Image
            source={feedImg}
            style={styles.img}
          />
          <Text
            numberOfLines={3}
            style={styles.name}>
            Banana and Mandarin Buns
          </Text>
        </View>
    )
};

export default React.memo(FoodCard);
