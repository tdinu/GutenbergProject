import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName } from './app.json';

const MyApp = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }} />
  );
};

AppRegistry.registerComponent(appName, () => MyApp);
