import React from 'react';
import { StyleSheet, Text } from 'react-native';

const DefaultText = ({ style, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'padauk',
  },
});

export default DefaultText;
