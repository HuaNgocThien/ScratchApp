import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenName from '../constants/screenName';
import LoginContainer from '../screens/auth/login/login.container';
import SignUpContainer from '../screens/auth/signup/signup.container';

const StackFlow = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <StackFlow.Navigator screenOptions={{ headerShown: false }}>
            <StackFlow.Screen
                name={screenName.LOGIN_SCREEN}
                component={LoginContainer}
            />
            <StackFlow.Screen name={screenName.SIGNUP_SCREEN} component={SignUpContainer} />
        </StackFlow.Navigator>
    );
}
export default AuthStack;