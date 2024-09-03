import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  arrow: {
    marginRight: 90
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinha o botão de voltar à esquerda
    padding: 20,
    marginBottom: 20, 
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#007bff', // Exemplo de cor
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;