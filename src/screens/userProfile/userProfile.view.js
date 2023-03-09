/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './userProfile.styles';
import { moreIcon } from '../../assets/images';
import {
  HeaderBack,
  Profile,
  ProfileTabView,
} from '../../components';
import { NavigationServices } from '../../utils';

const listTab = [
  {
    number: 20,
    title: 'Recipes',
    key: 'recipes',
  },
  {
    number: 248,
    title: 'Following',
    key: 'following',
  },
]
const UserProfileView = props => {
  return (
    <View style={styles.container}>
      <HeaderBack
        leftTitle={'Back'}
        onLeftTitlePress={NavigationServices.goBack}
        rightIcon={() => <TouchableOpacity>
          <Image
            source={moreIcon}
            style={styles.rightIcon}
          />
        </TouchableOpacity>} />
      <Profile />
      <View style={styles.lineSeparator} />
      <ProfileTabView listData={listTab} />
    </View>
  );
};

export default UserProfileView;
