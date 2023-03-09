/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { feedImg, avaFake } from '../../../../assets/images';

const FoundRecipes = props => {
    return (
        <View style={styles.profileWrapper}>
            <Image
                source={feedImg}
                style={styles.coverImg}
                resizeMode={'cover'}
            />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>Jennifer Lawred</Text>
                <View style={styles.userOtherInfo}>
                    <View style={styles.infoView}>
                        <Text style={styles.number}>289</Text>
                        <Text style={styles.infoName}>recipes</Text>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.number}>8k</Text>
                        <Text style={styles.infoName}>followers</Text>
                    </View>
                </View>
            </View>
            <View style={styles.userAvaWrapper}>
                <Image
                    source={avaFake}
                    style={styles.userAva}
                />
            </View>
        </View>
    );
};

export default React.memo(FoundRecipes);
