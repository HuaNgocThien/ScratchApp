/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import styles from './myProfile.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scaleHeight } from '../../utils';
import colors from '../../constants/colors';
import {
  HeaderTitle,
  Profile,
  ProfileTabView,
} from '../../components';

const listTab = [
  {
    number: 20,
    title: 'Recipes',
    key: 'recipes',
  },
  {
    number: 73,
    title: 'Saved',
    key: 'saves',
  },
  {
    number: 248,
    title: 'Following',
    key: 'following',
  },
]
const MyProfileView = props => {
  return (
    <View style={styles.container}>
      <HeaderTitle
        leftTitle={'My Kitchen'}
        hasRightTitle
        rightTitle={'Settings'}
        rightTitleIcon={() => <AntDesign name={'setting'} size={scaleHeight(20)} color={colors.black} />} />
      <Profile isMe />
      <View style={styles.lineSeparator} />
      <ProfileTabView listData={listTab}/>
    </View>
  );
};

export default MyProfileView;
