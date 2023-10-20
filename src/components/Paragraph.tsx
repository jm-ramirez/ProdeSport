import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
});

type TypeParagraphProps = {
  children?: ReactNode
};

export default function Paragraph({
  children
}: TypeParagraphProps) {
  return <Text style={styles.text} >{children}</Text>
};
