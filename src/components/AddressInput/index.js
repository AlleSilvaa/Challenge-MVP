import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

const AddressInput = ({ address, setAddress }) => {
  const handleAddressChange = (input) => {
    setAddress(input); 
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>Onde você ficará hospedado em São Paulo?</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={handleAddressChange}
        placeholder="Digite o endereço do seu hotel"
        multiline 
      />
    </View>
  );
};

export default AddressInput;