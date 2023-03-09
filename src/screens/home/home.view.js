/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import styles from './home.styles';
import HeaderSection from './components/HeaderSection';
import ListSection from './components/ListSection';

const HomeView = props => {
  return (
    <View style={styles.container}>
      <HeaderSection />
      <ListSection />
    </View>
  );
};

export default HomeView;
