import React from 'react'
import { View, StyleSheet, Text, ReturnKeyTypeOptions, KeyboardTypeOptions } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});

type TypeTextInputProps = {
  errorText?: string;
  description?: string;
  label?: TextInputLabelProp;
  returnKeyType?: ReturnKeyTypeOptions;
  value: string;  
  onChangeText: (text: any) => void;
  error?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters"
  autoComplete?:
  | 'additional-name'
  | 'address-line1'
  | 'address-line2'
  | 'birthdate-day'
  | 'birthdate-full'
  | 'birthdate-month'
  | 'birthdate-year'
  | 'cc-csc'
  | 'cc-exp'
  | 'cc-exp-day'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-number'
  | 'country'
  | 'current-password'
  | 'email'
  | 'family-name'
  | 'gender'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'name'
  | 'name-family'
  | 'name-given'
  | 'name-middle'
  | 'name-middle-initial'
  | 'name-prefix'
  | 'name-suffix'
  | 'new-password'
  | 'nickname'
  | 'one-time-code'
  | 'organization'
  | 'organization-title'
  | 'password'
  | 'password-new'
  | 'postal-address'
  | 'postal-address-country'
  | 'postal-address-extended'
  | 'postal-address-extended-postal-code'
  | 'postal-address-locality'
  | 'postal-address-region'
  | 'postal-code'
  | 'street-address'
  | 'sms-otp'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-device'
  | 'url'
  | 'username'
  | 'username-new'
  | 'off';
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode';
  keyboardType?: KeyboardTypeOptions;  
  secureTextEntry?: boolean;  
};

export default function TextInput({
  errorText,
  description,
  label,
  returnKeyType,
  value,
  onChangeText,
  error,
  autoCapitalize,
  autoComplete,
  textContentType,
  keyboardType,
  secureTextEntry,
}: TypeTextInputProps) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        label={label}
        returnKeyType={returnKeyType}
        value={value}
        onChangeText={onChangeText}
        error={error}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        textContentType={textContentType}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}
