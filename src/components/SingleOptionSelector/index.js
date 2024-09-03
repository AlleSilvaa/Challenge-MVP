import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'; // Crie também o arquivo style.js para este componente

const SingleOptionSelector = ({ title, options, selectedOption, setSelectedOption }) => {
  const toggleOption = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Desmarca se já estiver selecionado
    } else {
      setSelectedOption(option); // Seleciona a opção
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>{title}</Text>

      <View style={styles.option}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedOption === option && styles.optionButtonSelected,
            ]}
            onPress={() => toggleOption(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === option && styles.optionTextSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SingleOptionSelector;