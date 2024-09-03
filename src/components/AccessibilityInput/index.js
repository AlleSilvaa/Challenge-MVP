import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const AccessibilityInput = ({
  hasAccessibilityNeeds,
  setHasAccessibilityNeeds,
  accessibilityOption,
  setAccessibilityOption,
  accessibilityOptionsList,
}) => {
  const handleAccessibilityOptionChange = (option) => {
    if (accessibilityOption === option) {
      setAccessibilityOption(null);
    } else {
      setAccessibilityOption(option);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>
        Você possui necessidades especiais de acessibilidade?
      </Text>

      <View style={styles.option}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            hasAccessibilityNeeds === true && styles.optionButtonSelected,
          ]}
          onPress={() => setHasAccessibilityNeeds(true)}
        >
          <Text
            style={[
              styles.optionText,
              hasAccessibilityNeeds === true && styles.optionTextSelected,
            ]}
          >
            Sim
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            hasAccessibilityNeeds === false && styles.optionButtonSelected,
          ]}
          onPress={() => setHasAccessibilityNeeds(false)}
        >
          <Text
            style={[
              styles.optionText,
              hasAccessibilityNeeds === false && styles.optionTextSelected,
            ]}
          >
            Não
          </Text>
        </TouchableOpacity>
      </View>

      {hasAccessibilityNeeds === true && (
        <View style={styles.option}>
          {accessibilityOptionsList.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                accessibilityOption === option && styles.optionButtonSelected,
              ]}
              onPress={() => handleAccessibilityOptionChange(option)}
            >
              <Text
                style={[
                  styles.optionText,
                  accessibilityOption === option && styles.optionTextSelected,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default AccessibilityInput;