import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';

const ExclusionInput = ({ wantsToExclude, setWantsToExclude, exclusions, setExclusions }) => {
  const handleExclusionsChange = (input) => {
    if (input.length <= 150) {
      setExclusions(input);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>
        Há algo que você definitivamente NÃO quer fazer?
      </Text>

      <View style={styles.option}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            wantsToExclude === true && styles.optionButtonSelected,
          ]}
          onPress={() => setWantsToExclude(true)}
        >
          <Text
            style={[
              styles.optionText,
              wantsToExclude === true && styles.optionTextSelected,
            ]}
          >
            Sim
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            wantsToExclude === false && styles.optionButtonSelected,
          ]}
          onPress={() => setWantsToExclude(false)}
        >
          <Text
            style={[
              styles.optionText,
              wantsToExclude === false && styles.optionTextSelected,
            ]}
          >
            Não
          </Text>
        </TouchableOpacity>
      </View>

      {wantsToExclude === true && (
        <TextInput
          style={styles.input}
          value={exclusions}
          onChangeText={handleExclusionsChange}
          placeholder="Descreva o que não deseja fazer"
          maxLength={150}
        />
      )}
    </View>
  );
};

export default ExclusionInput;