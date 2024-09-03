import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; // Importe o ícone de voltar

import { useNavigation } from '@react-navigation/native';

import DaysInput from '../../components/DaysInput';
import OptionSelector from '../../components/OptionSelector';
import SingleOptionSelector from '../../components/SingleOptionSelector';
import PeopleCountInput from '../../components/PeopleCountInput';
import BudgetInput from '../../components/BudgetInput';
import ExclusionInput from '../../components/ExclusionInput';
import DietaryInput from '../../components/DietaryInput';
import AccessibilityInput from '../../components/AccessibilityInput';
import AddressInput from '../../components/AddressInput';
import CuisineInput from '../../components/CuisineInput';
import EventInput from '../../components/EventInput';


import styles from "./style";

const AddItinerario = () => {

    const [address, setAddress] = useState('');
    const [days, setDays] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [travelCompanion, setTravelCompanion] = useState('');
    const [peopleCount, setPeopleCount] = useState('1');
    const [budget, setBudget] = useState('');
    const [exclusions, setExclusions] = useState('');
    const [dietaryRestriction, setDietaryRestriction] = useState('');
    const [hasDietaryRestriction, setHasDietaryRestriction] = useState(null);
    const [hasAccessibilityNeeds, setHasAccessibilityNeeds] = useState(null);
    const [accessibilityOption, setAccessibilityOption] = useState(null);
    const [wantsToExclude, setWantsToExclude] = useState(null);
    const [hasCuisinePreference, setHasCuisinePreference] = useState(null);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [hasSpecificEvent, setHasSpecificEvent] = useState(null);
    const [eventDetails, setEventDetails] = useState('');

    const navigation = useNavigation();

    const [formData, setFormData] = useState({
      days: '', 
      selectedOptions: [],
      travelCompanion: '',
      peopleCount: '1',
      budget: '',
      exclusions: '',
      dietaryRestriction: '',
      accessibilityOption: null,
      selectedCuisines: [],
      eventDetails: '',
    }); 

    // Atualize o estado formData quando os campos do formulário mudarem
    useEffect(() => {
      setFormData({
        address,
        days,
        selectedOptions,
        travelCompanion,
        peopleCount,
        budget,
        exclusions,
        dietaryRestriction,
        accessibilityOption,
        selectedCuisines,
        eventDetails,
      });
    }, [
      address,
      days, 
      selectedOptions, 
      travelCompanion, 
      peopleCount, 
      budget, 
      exclusions, 
      dietaryRestriction, 
      accessibilityOption, 
      selectedCuisines, 
      eventDetails,
    ]);

    const travelOptions = [
        "Sozinho",
        "Em Casal",
        "Com Amigos",
        "Com Família"
    ];

    const focusOptions = [
        "Arte e Cultura",
        "Gastronomia",
        "Vida Noturna",
        "Compras",
        "Atividades ao Ar Livre",
        "História",
        "Mix de Tudo"
    ];

    const accessibilityOptionsList = [
        "Cadeira de Rodas",
        "Andador",
        "Deficiência Visual",
        "Deficiência Auditiva",
        "Outra"
    ];

    const cuisineOptions = [
        "Culinária Brasileira",
        "Culinária Italiana",
        "Culinária Japonesa",
        "Culinária Chinesa",
        "Culinária Mexicana",
        "Culinária Americana"
    ];


    const handleSubmit = () => {
        if (budget.trim() === '') {
            alert('O orçamento é obrigatório.');
            return;
        }

        let responseText = `Você ficará ${days} dias em São Paulo.\n`;
        responseText += `Sua localização é: ${address}.\n`;
        responseText += `Preferência de roteiro: ${selectedOptions.join(', ')}.\n`;
        responseText += `Você estará viajando: ${travelCompanion}.\n`;
        responseText += `Número de pessoas: ${peopleCount}.\n`;
        responseText += `Orçamento: R$ ${budget}.\n`;
        responseText += `Excluir atividade: ${wantsToExclude ? 'Sim' : 'Não'}.\n`;
        responseText += `Atividade a ser excluída: ${wantsToExclude ? exclusions : 'Nenhuma'}.\n`;
        responseText += `Restrições alimentares: ${hasDietaryRestriction ? 'Sim' : 'Não'}.\n`;
        responseText += `Descrição das restrições alimentares: ${hasDietaryRestriction ? dietaryRestriction : 'Nenhuma'}.\n`;
        responseText += `Necessidade de acessibilidade: ${hasAccessibilityNeeds ? 'Sim' : 'Não'}.\n`;
        responseText += `Opções de acessibilidade: ${hasAccessibilityNeeds ? accessibilityOption || 'Nenhuma' : 'Nenhuma'}.\n`;
        responseText += `Preferência por culinária: ${hasCuisinePreference ? 'Sim' : 'Não'}.\n`;
        responseText += `Tipos de culinária: ${hasCuisinePreference ? selectedCuisines.join(', ') : 'Nenhuma'}.\n`;
        responseText += `Evento específico: ${hasSpecificEvent ? 'Sim' : 'Não'}.\n`;
        responseText += `Detalhes do evento: ${hasSpecificEvent ? eventDetails : 'Nenhum'}.\n`;

        console.log(responseText);


        try {
          navigation.navigate('Resultado', { formData }); 
    
        } catch (error) {
          console.error("Erro ao gerar itinerário:", error);
          // Lide com o erro, exiba uma mensagem para o usuário, etc.
        } 
    };

        // useEffect para mostrar PeopleCountInput quando necessário
    useEffect(() => {
        if (travelCompanion === 'Com Amigos' || travelCompanion === 'Com Família') {
        setPeopleCount('2'); // Define um valor inicial quando for com amigos ou família
        } else {
        setPeopleCount('1'); // Volta para 1 se não for com amigos ou família
        }
    }, [travelCompanion]); // Executa sempre que travelCompanion mudar

    return (
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.header}> {/* Adicione um cabeçalho */}
            <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
                style={styles.arrow}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.title}>TechPeach</Text>
          </View>

          <Text style={styles.description}>
            Para criar o itinerário personalizado perfeito para você em São Paulo,
            queremos conhecê-lo melhor! Responda algumas perguntas simples abaixo e
            deixe-nos cuidar do resto.
          </Text>

          <AddressInput 
            address={address} 
            setAddress={setAddress} 
          />
    
          <DaysInput
            days={days}
            setDays={setDays}
          />
    
          <OptionSelector
            title="Você prefere um roteiro mais focado em:"
            options={focusOptions}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            maxSelections={2}
          />

          <SingleOptionSelector // Use o novo componente para seleção única
            title="Você estará viajando:"
            options={travelOptions}
            selectedOption={travelCompanion}
            setSelectedOption={setTravelCompanion}
          />

          {/* PeopleCountInput condicional */}
          {(travelCompanion === 'Com Amigos' || travelCompanion === 'Com Família') && (
              <PeopleCountInput
                peopleCount={peopleCount}
                setPeopleCount={setPeopleCount}
              />
          )}
    
          <BudgetInput 
            budget={budget} 
            setBudget={setBudget} 
          />
          
          <ExclusionInput 
            wantsToExclude={wantsToExclude}
            setWantsToExclude={setWantsToExclude}
            exclusions={exclusions}
            setExclusions={setExclusions}
          />
    
          <DietaryInput 
            hasDietaryRestriction={hasDietaryRestriction}
            setHasDietaryRestriction={setHasDietaryRestriction}
            dietaryRestriction={dietaryRestriction}
            setDietaryRestriction={setDietaryRestriction}
          />
    
          <AccessibilityInput
            hasAccessibilityNeeds={hasAccessibilityNeeds}
            setHasAccessibilityNeeds={setHasAccessibilityNeeds}
            accessibilityOption={accessibilityOption}
            setAccessibilityOption={setAccessibilityOption}
            accessibilityOptionsList={accessibilityOptionsList}
          />
    
          <CuisineInput
            hasCuisinePreference={hasCuisinePreference}
            setHasCuisinePreference={setHasCuisinePreference}
            cuisineOptions={cuisineOptions}
            selectedCuisines={selectedCuisines}
            setSelectedCuisines={setSelectedCuisines}
          />
    
          <EventInput
            hasSpecificEvent={hasSpecificEvent}
            setHasSpecificEvent={setHasSpecificEvent}
            eventDetails={eventDetails}
            setEventDetails={setEventDetails}
          />
    
          {/* Botão de enviar */}
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Enviar</Text>
          </Pressable>

        </ScrollView>
      );
    };
    
export default AddItinerario;