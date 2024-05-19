import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';

const MyApp = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <Header headerTitle="Books" />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent(appName, () => MyApp);
