import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './signup.styles';
import {
  CustomInput,
  MainButton,
} from '../../../components';
import HeaderSection from '../components/HeaderSection';
import { NavigationServices } from '../../../utils';
import screenName from '../../../constants/screenName';

const SignUpView = ({
  onLoginPress,
  email,
  password,
  name,
  showErrMsg,
  onSignUp,
}) => {
  return (
    <View style={styles.container}>
      <HeaderSection title={'Start\nfrom Scratch'}/>
      <ScrollView contentContainerStyle={styles.scrollViewContainer} style={styles.body}>
        <Text style={styles.loginTxt}>Create account to continue.</Text>
        <CustomInput
          leftTitle={'Full Name'}
          customStyle={styles.input}
          value={name}
          showErrMsg={showErrMsg}
        />
        <CustomInput
          leftTitle={'Email'}
          customStyle={styles.input}
          value={email}
          showErrMsg={showErrMsg}
          keyboardType='email-address'
        />
        <CustomInput
          leftTitle={'Password'}
          customStyle={styles.input}
          value={password}
          showErrMsg={showErrMsg}
          secureTextEntry
        />
        <MainButton
          onPress={onSignUp}
          customStyle={styles.mainBtn}
          title={'Create Account'}
        />
        <Text style={styles.newTitle}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> NavigationServices.navigate(screenName.LOGIN_SCREEN)}>
          <Text style={styles.createTitle}>Login Here</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignUpView;
