import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo suave
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, 
  },
  arrow: {
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Cor de texto escura
  },
  dayContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff', // Cor de fundo branca para os dias
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff', // Cor azul para os dias
  },
  periodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#666', // Cor cinza para os títulos de período
  },
  activityContainer: {
    marginBottom: 10,
  },
  activityDescription: {
    fontSize: 16,
    color: '#333',
  },
  activityDetails: {
    fontSize: 14,
    color: '#555', // Cor cinza mais clara para detalhes
    marginTop: 5,
  },
});

export default styles;