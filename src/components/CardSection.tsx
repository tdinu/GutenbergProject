import { View, StyleProp, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const CardSection = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, styles, ...rest } = props;
  return <View style={styles}>{children}</View>;
};

export default CardSection;
