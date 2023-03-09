import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationServices } from '../utils';
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  scratchLogo,
  bgImage,
  splashOverlay,
} from '../assets/images';
import screenName from '../constants/screenName';

class Splash extends Component {
  componentDidMount() {
    setTimeout(async () => {
      // const accessToken = await AsyncStorage.getItem('ACCESS_TOKEN');
      // if (accessToken) {
      //   NavigationServices.replace(screenName.HOME_SCREEN);
      // } else {
      //   NavigationServices.replace(screenName.AUTH_SCREEN);
      // }
      // NavigationServices.replace(screenName.MAIN_TAB,{
      //   screen: screenName.HOME_SCREEN
      // });
      NavigationServices.replace(screenName.AUTH_SCREEN);
    }, 5000)
  }

  render() {
    return <View style={styles.container}>
      <Image
        source={bgImage}
        style={styles.bgImage}
        resizeMode={'cover'}
      />
      <Image
        source={splashOverlay}
        style={styles.bgOverlay}
      />
      <View style={styles.logoWrapper}>
        <Image
          source={scratchLogo}
          style={styles.logo}
        />
      </View>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bgImage: {
    width: '100%',
    position: 'absolute',
  },
  bgOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  logoWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  }
});

export default Splash;
