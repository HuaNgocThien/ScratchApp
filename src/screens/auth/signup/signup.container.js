/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import SignUpView from './signup.view';
import {
  useInputChange,
} from '../../../hooks'
import { NavigationServices } from '../../../utils';
import screenName from '../../../constants/screenName';

const SignUpContainer = (props) => {
  const email = useInputChange('', 'email', false);
  const password = useInputChange('', 'password', false);
  const name = useInputChange('', 'text', false);
  const [showErrMsg, setShowErrMsg] = useState(false);

  useEffect(() => {
    setShowErrMsg(false)
  }, [email.value, password.value, name.value])
  const onSignUp = () => {
    if ((!email.value || !password.value || !name.value) || !email.isValid) {
      setShowErrMsg(true);
    } else {
      Alert.alert('Thông báo', 'Đăng ký thành công',[
        {
          text:'OK',
          onPress:()=> NavigationServices.push(screenName.LOGIN_SCREEN,{
            email: email.value
          })
        }
      ])
    }
  }
  return (
    <SignUpView
      email={email}
      password={password}
      name={name}
      showErrMsg={showErrMsg}
      onSignUp={onSignUp}
    />
  );
};

export default SignUpContainer;
