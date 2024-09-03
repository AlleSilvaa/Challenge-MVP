import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const OptionSelector = ({ title, options, selectedOptions, setSelectedOptions, maxSelections }) => {
  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      // Se a opção já estiver selecionada, remove
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      if (selectedOptions.length < maxSelections) {
        // Se ainda não atingiu o limite, adiciona
        setSelectedOptions([...selectedOptions, option]);
      } else {
        alert(`Você pode selecionar no máximo ${maxSelections} opções.`);
      }
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
              selectedOptions.includes(option) && styles.optionButtonSelected,
            ]}
            onPress={() => toggleOption(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOptions.includes(option) && styles.optionTextSelected,
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

export default OptionSelector;