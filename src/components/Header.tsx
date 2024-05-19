import { StyleProp, Text, View, ViewStyle } from 'react-native';
import React from 'react';

const Header = (props: { headerTitle: string }) => {
  const { title, container } = styles;
  const { headerTitle } = props;
  return (
    <View style={container as StyleProp<ViewStyle>}>
      <Text style={title}>{headerTitle}</Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  title: {
    fontSize: 20,
  },
};

export default Header;
