import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import styles from './styles';
import { feedImg } from '../../assets/images';


const TabContent = (props) => {
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.recipeWrapper}>
                <Image
                    source={feedImg}
                    style={styles.feedImg}
                />
                <Text style={styles.feedName}>{item}</Text>
            </View>
        );
    }
    return (
        <FlatList
            data={['Potato', 'Banana', 'Tomato', 'Sauce', 'Fish', 'Chicken', 'Crab', 'Eggs', 'Meat', 'Beef']}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.contentContainer}
        />
    );
}
export default React.memo(TabContent);