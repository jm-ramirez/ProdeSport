import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});

type TypeHeaderProps = {
  children?: ReactNode
};

export default function Header({
  children
}: TypeHeaderProps) {
  return <Text style={styles.header} >{children}</Text>
};
