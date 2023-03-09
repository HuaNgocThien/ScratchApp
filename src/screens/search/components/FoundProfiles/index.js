/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import AreaHeader from '../AreaHeader';
import ProfileCard from '../ProfileCard';

const FoundRecipes = props => {
    const renderItem = ({ item, index }) => {
        return (
            <ProfileCard />
        );
    }
    return (
        <View style={styles.wrapper}>
            <AreaHeader
                leftTitle={'Profiles'}
                rightTitle={'show all (42+)'}
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
