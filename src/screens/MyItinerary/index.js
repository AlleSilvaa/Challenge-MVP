import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons'; // Importe o ícone de voltar


import styles from "./style";

const MyItinerary = ({ navigation }) => {
  const [itineraries, setItineraries] = useState([]);


  useEffect(() => {
    const loadItineraries = async () => {
      try {
        const savedItineraries = await AsyncStorage.getItem('itineraries') || '[]';
        setItineraries(JSON.parse(savedItineraries));
      } catch (error) {
        console.error('Erro ao carregar itinerários:', error);
      }
    };

    loadItineraries();
  }, []);

  

  const handleItineraryPress = (itinerary) => {
    navigation.navigate('DetalhesItinerario', { itinerary }); // Navegue para a tela de detalhes
  };
  

  const renderItineraryItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleItineraryPress(item)} key={index}>
      <View style={styles.itineraryItem}>
        <Text style={styles.itineraryTitle}>Itinerário {index + 1}</Text>
        {/* Exiba uma prévia do itinerário aqui, se desejar */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.arrow}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Meus Itinerários</Text>
      </View>

      <FlatList
        data={itineraries}
        renderItem={renderItineraryItem}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  );
};


export default MyItinerary;