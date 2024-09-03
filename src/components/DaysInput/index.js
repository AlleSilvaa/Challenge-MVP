import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './style';

const DaysInput = ({ days, setDays }) => {
  const handleDaysChange = (input) => {
    const cleanedInput = input.replace(/[^\d]/g, '');
    const number = parseInt(cleanedInput, 10);
    if (!isNaN(number) && number <= 365) {
      setDays(cleanedInput);
    } else if (cleanedInput === '') {
      setDays('');
    }
  };

  const incrementDays = () => {
    const number = parseInt(days, 10) || 0;
    if (number < 365) {
      setDays((number + 1).toString());
    }
  };

  const decrementDays = () => {
    const number = parseInt(days, 10) || 0;
    if (number > 0) {
      setDays((number - 1).toString());
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>Quantos dias você ficará em São Paulo?</Text>

      <View style={styles.inputNumber}>
        <Pressable style={styles.button} onPress={decrementDays}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <TextInput
          style={styles.input}
          value={days}
          onChangeText={handleDaysChange}
          keyboardType="numeric"
          placeholder="Quantidade de Dias"
        />

        <Pressable style={styles.button} onPress={incrementDays}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DaysInput;