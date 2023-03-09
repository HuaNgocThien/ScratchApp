/* eslint-disable react-hooks/exhaustive-deps */
import {loginHandle} from '../../../redux/auth/actions';
import {NavigationServices} from '../../../utils';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import {useDispatch} from 'react-redux';
import LoginView from './login.view';
import {
  useInputChange,
} from '../../../hooks'
import screenName from '../../../constants/screenName';

const LoginContainer = ({route}) => {
  const dispatch = useDispatch();
  const email = useInputChange(route?.params?.email,'email', false);
  const password = useInputChange('', 'password', false);
  const [showErrMsg, setShowErrMsg] = useState(false);
  useEffect(() => {
    setShowErrMsg(false)
  }, [email.value, password.value])
  const onLogin = () => {
    if ((!email.value || !password.value) || !email.isValid) {
      setShowErrMsg(true);
    } else {
      Alert.alert('Thông báo', 'Đăng nhập thành công',[
        {
          text:'OK',
          onPress:()=> NavigationServices.replace(screenName.MAIN_TAB,{
            screen: screenName.HOME_SCREEN
          })
        }
      ])
    }
  }
  return (
    <LoginView
      onLoginPress={values => {
        dispatch(
          loginHandle(values, () => {
            NavigationServices.replace('Home');
          }),
        );
      }}
      showErrMsg={showErrMsg}
      onLogin={onLogin}
      email={email}
      password={password}
    />
  );
};

export default LoginContainer;
