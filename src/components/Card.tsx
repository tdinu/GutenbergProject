import { StyleProp, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

const Card = ({ children }: PropsWithChildren) => {
  return <View style={styles as StyleProp<ViewStyle>}>{children}</View>;
};

export default Card;

const styles = {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  margin: 10,
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 2,
  elevation: 1,
  borderBottomWidth: 1,
  borderColor: '#ddd',
  paddingVertical: 4,
};
