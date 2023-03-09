import AsyncStorage from '@react-native-async-storage/async-storage';
import { APIUtils } from './utils';
import React, { useEffect } from 'react';
import AppContainer from './navigator';
import { persistor } from './redux/configureStore';
import { Provider } from 'react-redux';

const Root = props => {
  const getAccessToken = async () => {
    const res = await AsyncStorage.getItem('ACCESS_TOKEN');
    console.log('accessToken', res);
    APIUtils.setAccessToken(res);
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <Provider store={persistor}>
      <AppContainer />
    </Provider>
  );
};

export default Root;
