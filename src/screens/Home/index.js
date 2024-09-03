import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { getAuth } from 'firebase/auth';
import { app } from '../../../firebaseConfig';

import styles from "./style";

const HomeScreen = ({ navigation }) => {

  const logout = () => {

    const auth = getAuth(app);
    
    auth.signOut().then(() => {
      // Redirecionar para a tela de login após o logout
      navigation.navigate('Login');
    }).catch((error) => {
      console.log("Erro ao deslogar:", error);
    });
  };


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          TechPeach
        </Text>
        
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#908A8A' : '#908A8A' }
          ]}
          onPress={logout}
        >
          <img style={styles.icon} src='../../assets/perfil-de-usuario.png' />
        </Pressable>

      </View>

      <View style={styles.containerButtons} >

        <Text> Explore São Paulo de uma forma totalmente personalizada com os itinerários exclusivos da TechPeach. Descubra os melhores locais da cidade de acordo com seus interesses e preferências. Deixe-nos guiar você em uma experiência única pela vibrante São Paulo. </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#908A8A' : '#E8E8E8' }
          ]}
          onPress={() => navigation.navigate('MeusItinerarios')}
        >
          <Text style={styles.text}>MEUS INTINERÁRIOS</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#908A8A' : '#E8E8E8' }
          ]}
          onPress={() => navigation.navigate('Formulario')}
        >
          <Text style={styles.text}>CRIAR INTINERÁRIOS</Text>
        </Pressable>
        
      </View>
    </>
  );
}

export default HomeScreen;
