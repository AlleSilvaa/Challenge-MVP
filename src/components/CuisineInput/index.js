import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const CuisineInput = ({
  hasCuisinePreference,
  setHasCuisinePreference,
  cuisineOptions,
  selectedCuisines,
  setSelectedCuisines,
}) => {
  const toggleCuisine = (cuisine) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== cuisine));
    } else {
      if (selectedCuisines.length < 3) {
        setSelectedCuisines([...selectedCuisines, cuisine]);
      } else {
        alert('Você pode selecionar no máximo 3 tipos de culinária.');
      }
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>Você tem alguma preferência por culinária?</Text>

      <View style={styles.option}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            hasCuisinePreference === true && styles.optionButtonSelected,
          ]}
          onPress={() => setHasCuisinePreference(true)}
        >
          <Text
            style={[
              styles.optionText,
              hasCuisinePreference === true && styles.optionTextSelected,
            ]}
          >
            Sim
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            hasCuisinePreference === false && styles.optionButtonSelected,
          ]}
          onPress={() => setHasCuisinePreference(false)}
        >
          <Text
            style={[
              styles.optionText,
              hasCuisinePreference === false && styles.optionTextSelected,
            ]}
          >
            Não
          </Text>
        </TouchableOpacity>
      </View>

      {hasCuisinePreference === true && (
        <View style={styles.option}>
          {cuisineOptions.map((cuisine) => (
            <TouchableOpacity
              key={cuisine}
              style={[
                styles.optionButton,
                selectedCuisines.includes(cuisine) && styles.optionButtonSelected,
              ]}
              onPress={() => toggleCuisine(cuisine)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedCuisines.includes(cuisine) && styles.optionTextSelected,
                ]}
              >
                {cuisine}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CuisineInput;