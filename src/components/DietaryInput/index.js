import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';

const DietaryInput = ({
  hasDietaryRestriction,
  setHasDietaryRestriction,
  dietaryRestriction,
  setDietaryRestriction,
}) => {
  const handleDietaryRestrictionChange = (input) => {
    if (input.length <= 100) {
      setDietaryRestriction(input);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>Você tem alguma restrição alimentar?</Text>

      <View style={styles.option}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            hasDietaryRestriction === true && styles.optionButtonSelected,
          ]}
          onPress={() => setHasDietaryRestriction(true)}
        >
          <Text
            style={[
              styles.optionText,
              hasDietaryRestriction === true && styles.optionTextSelected,
            ]}
          >
            Sim
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            hasDietaryRestriction === false && styles.optionButtonSelected,
          ]}
          onPress={() => setHasDietaryRestriction(false)}
        >
          <Text
            style={[
              styles.optionText,
              hasDietaryRestriction === false && styles.optionTextSelected,
            ]}
          >
            Não
          </Text>
        </TouchableOpacity>
      </View>

      {hasDietaryRestriction === true && (
        <TextInput
          style={styles.input}
          value={dietaryRestriction}
          onChangeText={handleDietaryRestrictionChange}
          placeholder="Descreva suas restrições alimentares"
          maxLength={150}
        />
      )}
    </View>
  );
};

export default DietaryInput;