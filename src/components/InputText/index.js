import React from 'react';
import { TextInput } from 'react-native';

import styles from "./style";

const InputText = ({ placeholder, value, onChangeText, keyboardType }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

export default InputText;
