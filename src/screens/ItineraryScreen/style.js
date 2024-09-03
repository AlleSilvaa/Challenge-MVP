import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo suave
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Cor de texto escura
  },
  periodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#666', // Cor cinza para os títulos de período
  },
  activityDetails: {
    fontSize: 14,
    color: '#555', // Cor cinza mais clara para detalhes
    marginTop: 5,
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff', // Cor azul para os dias
  },
  activityContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd', 
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  activityTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 16,
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;