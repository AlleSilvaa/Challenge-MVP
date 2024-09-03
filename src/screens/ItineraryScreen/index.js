import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Pressable } from 'react-native';
import * as GoogleGenerativeAI from '@google/generative-ai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./style";

// Load the reviews JSON file
import reviewsData from '../../../assets/reviews/reviews.json';

const ItineraryScreen = ({ route, navigation }) => {
  const { formData } = route.params;
  const [itinerary, setItinerary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = 'AIzaSyBMrNd8C3B5dCBevyM6kez4UTdH2GaL4o4'; // Replace with your API Key

  useEffect(() => {
    const fetchItinerary = async () => {
      if (!formData) {
        setIsLoading(false);
        return;
      }

      try {
        // Convert the reviews data into a format suitable for the chat history
        const reviewsSummary = reviewsData.reviews.map(review => {
          return `Lugar: ${review.Lugar}, Nota: ${review.Nota}/5, Avaliação: ${review.Avaliacao}`;
        }).join('\n');

        // Set up the chat session with the reviews data included in the history
        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const chatSession = model.startChat({
          generationConfig: {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
          },
          history: [
            {
              role: "user",
              parts: [
                {
                  text: `Analise as seguintes avaliações de lugares em São Paulo para gerar o melhor itinerário para o usuário:
                  ${reviewsSummary}`,
                },
              ],
            },
          ],
        });

        // Send the user's itinerary preferences as the next input
        const userMessage = `
          Crie um itinerário de viagem detalhado para cidade de São Paulo com base nas seguintes informações que o usuário informou:
          - Endereço do Hotel: ${formData.address} 
          - Duração da viagem: ${formData.days} dias
          - Preferências: ${formData.selectedOptions.join(', ')}
          - Acompanhantes: ${formData.travelCompanion}
          - Quantidade de pessoas: ${formData.peopleCount}
          - Orçamento: R$ ${formData.budget}
          - Exclusões: ${formData.exclusions}
          - Restrições alimentares: ${formData.dietaryRestriction}
          - Acessibilidade: ${formData.accessibilityOption}
          - Culinária: ${formData.selectedCuisines.join(', ')}
          - Evento: ${formData.eventDetails}

          Inclua sugestões de:
          - Horários para cada atividade
          - Meios de transporte
          - Custo estimado de cada atividade (se possível)
          - Links para mais informações sobre cada local
          - Dicas adicionais para aproveitar ao máximo a viagem a São Paulo! 
        `;

        const result = await chatSession.sendMessage(userMessage);
        const generatedItinerary = result.response.text();

        setItinerary(generatedItinerary);
      } catch (error) {
        console.error('Erro ao gerar o itinerário:', error);
        alert('Erro ao gerar o itinerário. Tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItinerary();
  }, [formData]);

  const saveItineraryAndGoHome = async () => {
    try {
      if (!itinerary) {
        alert('Erro: Nenhum itinerário gerado para salvar.');
        return;
      }

      const savedItineraries = await AsyncStorage.getItem('itineraries') || '[]';
      const parsedItineraries = JSON.parse(savedItineraries);
      parsedItineraries.push(itinerary);
      await AsyncStorage.setItem('itineraries', JSON.stringify(parsedItineraries));

      alert('Sucesso: Itinerário salvo com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao salvar o itinerário:', error);
      alert('Erro: Falha ao salvar o itinerário.');
    }
  };

  const formatItinerary = (itineraryText) => {
    if (!itineraryText) return null;

    const dayRegex = /Dia (\d+)/g;
    let days = [];
    let match;
    while ((match = dayRegex.exec(itineraryText)) !== null) {
      days.push(match.index);
    }

    if (days.length === 0) {
      days = [0];
    }

    const formattedDays = days.map((startIndex, dayIndex) => {
      const endIndex = dayIndex < days.length - 1 ? days[dayIndex + 1] : itineraryText.length;
      const dayText = itineraryText.substring(startIndex, endIndex);

      const dayNumber = dayIndex + 1;

      const activities = dayText.split('\n')
        .filter(line => line.trim() !== '' && !line.startsWith('Dia '))
        .map(line => line.trim());

      const formattedActivities = activities.map((activity, activityIndex) => {
        activity = activity.replace(/\*\*/g, '');
        activity = activity.replace(/(\d+)\n(\d+)/g, '$1$2');

        if (activity.match(/(Manhã|Tarde|Noite)/)) {
          return (
            <Text key={`${dayIndex}-${activityIndex}`} style={styles.periodTitle}>
              {activity}
            </Text>
          );
        }

        let [description, ...details] = activity.split(':');
        details = details.join(':').trim();

        return (
          <View key={`${dayIndex}-${activityIndex}`} style={styles.activityContainer}>
            <Text style={styles.activityDescription}>{description.trim()}</Text>
            {details ? <Text style={styles.activityDetails}>{details}</Text> : null}
          </View>
        );
      });

      return (
        <View key={dayIndex} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>Dia {dayNumber}</Text>
          {formattedActivities}
        </View>
      );
    });

    return formattedDays;
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text>Gerando seu itinerário...</Text>
        </View>
      ) : (
        <ScrollView>
          <Text style={styles.title}>Seu Itinerário:</Text>
          {formatItinerary(itinerary)}

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Formulario')}>
              <Text style={styles.buttonText}>Refazer</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={saveItineraryAndGoHome}>
              <Text style={styles.buttonText}>Salvar Itinerário</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ItineraryScreen;
