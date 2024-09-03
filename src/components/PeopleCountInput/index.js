import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './style';

const PeopleCountInput = ({ peopleCount, setPeopleCount }) => {
  const handlePeopleCountChange = (input) => {
    const cleanedInput = input.replace(/[^\d]/g, '');
    const number = parseInt(cleanedInput, 10);
    if (!isNaN(number) && number >= 1 && number <= 12) {
      setPeopleCount(cleanedInput);
    } else if (cleanedInput === '') {
      setPeopleCount('');
    }
  };

  const incrementPeopleCount = () => {
    const number = parseInt(peopleCount, 10) || 1;
    if (number < 12) {
      setPeopleCount((number + 1).toString());
    }
  };

  const decrementPeopleCount = () => {
    const number = parseInt(peopleCount, 10) || 1;
    if (number > 1) {
      setPeopleCount((number - 1).toString());
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>Quantas pessoas irão com você?</Text>

      <View style={styles.inputNumber}>
        <Pressable style={styles.button} onPress={decrementPeopleCount}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <TextInput
          style={styles.input}
          value={peopleCount}
          onChangeText={handlePeopleCountChange}
          keyboardType="numeric"
          placeholder="Número de Pessoas"
        />

        <Pressable style={styles.button} onPress={incrementPeopleCount}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PeopleCountInput;