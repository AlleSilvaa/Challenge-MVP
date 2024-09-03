import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

const BudgetInput = ({ budget, setBudget }) => {
  const handleBudgetChange = (input) => {
    let cleanedInput = input.replace(',', '.').replace(/[^0-9.]/g, '');
    const parts = cleanedInput.split('.');
    if (parts.length > 2) {
      cleanedInput = parts[0] + '.' + parts[1];
    }
    setBudget(cleanedInput);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>Qual é o seu orçamento para a viagem?</Text>
      <TextInput
        style={styles.input}
        value={budget}
        onChangeText={handleBudgetChange}
        keyboardType="numeric"
        placeholder="Orçamento"
      />
    </View>
  );
};

export default BudgetInput;