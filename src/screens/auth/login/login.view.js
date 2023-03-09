import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './login.styles';
import {
  CustomInput,
  MainButton,
} from '../../../components';
import HeaderSection from '../components/HeaderSection';
import { NavigationServices } from '../../../utils';
import screenName from '../../../constants/screenName';

const LoginView = ({
  onLoginPress,
  email,
  password,
  showErrMsg,
  onLogin
}) => {
  return <View style={styles.container}>
    <HeaderSection title='Welcome Back!' />
    <View style={styles.body}>
      <Text style={styles.loginTxt}>Please login to continue.</Text>
      <CustomInput
        leftTitle={'Email'}
        customStyle={styles.emailInput}
        value={email}
        keyboardType='email-address'
        showErrMsg={showErrMsg}
      />
      <CustomInput
        leftTitle={'Password'}
        isRightTitle
        rightTitle={'Forgot password?'}
        customStyle={styles.passwordInput}
        value={password}
        secureTextEntry
        showErrMsg={showErrMsg}
      />
      <MainButton
        customStyle={styles.mainBtn}
        title={'Login'}
        onPress={onLogin}
      />
      <Text style={styles.newTitle}>New to Scratch?</Text>
      <TouchableOpacity onPress={() => NavigationServices.navigate(screenName.SIGNUP_SCREEN)}>
        <Text style={styles.createTitle}>Create Account Here</Text>
      </TouchableOpacity>
    </View>
  </View>
};

export default LoginView;
