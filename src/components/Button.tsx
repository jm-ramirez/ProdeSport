import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

type TypeBackgroundProps = {
  mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress: () => void;
};

export default function Button({ 
  mode, 
  style, 
  children,
  onPress,
}: TypeBackgroundProps) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      onPress={onPress}
    >
      {children}
    </PaperButton>
  )
}
