import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import {NavigationServices} from '../utils';
import screenName from '../constants/screenName';
import HomeScreen from './TabNavigator';
import Splash from '../screens/Splash';
import AuthStack from './AuthNavigator';

const StackFlow = createNativeStackNavigator();
class MyStack extends React.Component {
  render() {
    return (
      <StackFlow.Navigator initialRouteName={screenName.SPLASH_SCREEN} screenOptions={{headerShown: false}}>
        <StackFlow.Screen name={screenName.SPLASH_SCREEN} component={Splash}/>
        <StackFlow.Screen
          name={screenName.AUTH_SCREEN}
          component={AuthStack}
        />
        <StackFlow.Screen name={screenName.MAIN_TAB} component={HomeScreen}/>
      </StackFlow.Navigator>
    );
  }
}

const AppContainer = props => {
  const routeNameRef = React.useRef();

  return (
    <NavigationContainer
      ref={NavigationServices.navigationRef}
      onReady={() => {
        routeNameRef.current =
          NavigationServices.navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={state => {}}>
        <StatusBar 
        backgroundColor={'white'}
        barStyle={'dark-content'}/>
      <MyStack />
    </NavigationContainer>
  );
};

export default AppContainer;
