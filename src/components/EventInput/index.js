import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';

const EventInput = ({
  hasSpecificEvent,
  setHasSpecificEvent,
  eventDetails,
  setEventDetails,
}) => {
  const handleEventDetailsChange = (input) => {
    if (input.length <= 220) {
      setEventDetails(input);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.login}>
        Você gostaria de incluir um evento específico em seu itinerário?
      </Text>

      <View style={styles.option}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            hasSpecificEvent === true && styles.optionButtonSelected,
          ]}
          onPress={() => setHasSpecificEvent(true)}
        >
          <Text
            style={[
              styles.optionText,
              hasSpecificEvent === true && styles.optionTextSelected,
            ]}
          >
            Sim
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            hasSpecificEvent === false && styles.optionButtonSelected,
          ]}
          onPress={() => setHasSpecificEvent(false)}
        >
          <Text
            style={[
              styles.optionText,
              hasSpecificEvent === false && styles.optionTextSelected,
            ]}
          >
            Não
          </Text>
        </TouchableOpacity>
      </View>

      {hasSpecificEvent === true && (
        <TextInput
          style={styles.input}
          value={eventDetails}
          onChangeText={handleEventDetailsChange}
          placeholder="Nome do Evento, Descrição, Dia da Semana, Hora, Duração"
          maxLength={220}
        />
      )}
    </View>
  );
};

export default EventInput;