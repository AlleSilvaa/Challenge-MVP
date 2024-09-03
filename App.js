
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import { StyleSheet, SafeAreaView } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container} >
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;